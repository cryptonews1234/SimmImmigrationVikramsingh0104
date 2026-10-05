import sanitizeHtml from 'sanitize-html';

const UPLIFT_API_BASE = 'https://api.upliftai.co/api/public/v1';
const REQUEST_TIMEOUT_MS = 10000;

export class UpliftError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = 'UpliftError';
    this.status = status;
  }
}

function getToken() {
  const token = process.env.UPLIFT_API_TOKEN;
  if (!token) throw new UpliftError('UPLIFT_API_TOKEN is not configured');
  return token;
}

async function upliftRequest(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${UPLIFT_API_BASE}${path}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => null);

    if (!response.ok || !payload?.success) {
      if (response.status === 404) throw new UpliftError('Blog not found', 404);
      throw new UpliftError('Uplift blog service is temporarily unavailable', 502);
    }

    return payload.data;
  } catch (error) {
    if (error instanceof UpliftError) throw error;
    if (error?.name === 'AbortError') throw new UpliftError('Uplift blog service timed out', 504);
    throw new UpliftError('Unable to reach the Uplift blog service', 502);
  } finally {
    clearTimeout(timeout);
  }
}

export async function getBlogs({ page = 1, limit = 100 } = {}) {
  const safePage = Math.max(1, Number.parseInt(page, 10) || 1);
  const safeLimit = Math.min(100, Math.max(1, Number.parseInt(limit, 10) || 100));
  return upliftRequest(`/blogs?page=${safePage}&limit=${safeLimit}&status=PUBLISH`);
}

export async function getAllBlogs() {
  const firstPage = await getBlogs({ page: 1, limit: 100 });
  const totalPages = firstPage.pagination?.totalPages || 1;

  if (totalPages <= 1) return firstPage.blogs || [];

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) => getBlogs({ page: index + 2, limit: 100 }))
  );

  return [firstPage, ...remainingPages].flatMap((result) => result.blogs || []);
}

export async function getBlogBySlug(slug) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || '')) {
    throw new UpliftError('Invalid blog slug', 404);
  }
  return upliftRequest(`/blog/${encodeURIComponent(slug)}`);
}

export function sanitizeBlogBody(html = '') {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      'img', 'figure', 'figcaption', 'aside', 'details', 'summary',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'time', 'mark',
    ],
    allowedAttributes: {
      '*': ['class', 'id'],
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
      time: ['datetime'],
      th: ['colspan', 'rowspan', 'scope'],
      td: ['colspan', 'rowspan'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: { img: ['https'] },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          ...(attribs.target === '_blank' ? { rel: 'noopener noreferrer' } : {}),
        },
      }),
      img: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, loading: attribs.loading || 'lazy' },
      }),
    },
  });
}

export function normalizeBlogSchemas(schemas, slug, siteUrl) {
  if (!Array.isArray(schemas)) return [];
  const canonical = `${siteUrl}/blog/${slug}`;
  const legacy = `${siteUrl}/services/super-visa/blog/${slug}`;

  return schemas.map((schema) =>
    JSON.parse(JSON.stringify(schema).split(legacy).join(canonical))
  );
}
