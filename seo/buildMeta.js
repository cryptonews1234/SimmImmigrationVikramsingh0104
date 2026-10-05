import { defaultSEO } from '@/seo/seo.config';

export function buildMeta({ title, description, path = '/', image, keywords, noindex = false } = {}) {
  const canonical = `${defaultSEO.siteUrl}${path === '/' ? '' : path}` || defaultSEO.siteUrl;
  const resolvedImage = image?.startsWith('http')
    ? image
    : `${defaultSEO.siteUrl}${image || defaultSEO.defaultImage}`;
  return {
    title: title ? defaultSEO.titleTemplate.replace('%s', title) : defaultSEO.defaultTitle,
    description: description || defaultSEO.defaultDescription,
    canonical: canonical || defaultSEO.siteUrl,
    image: resolvedImage,
    noindex,
    keywords: (keywords?.length ? keywords : defaultSEO.keywords).join(', '),
  };
}

export default buildMeta;
