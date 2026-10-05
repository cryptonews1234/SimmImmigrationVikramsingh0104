import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/common/Seo';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import company from '@/data/company';
import { breadcrumbSchema, organizationSchema } from '@/seo/schema';
import {
  getAllBlogs,
  getBlogBySlug,
  normalizeBlogSchemas,
  sanitizeBlogBody,
  UpliftError,
} from '@/lib/uplift';

function formatDate(value) {
  if (!value) return '';
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export default function BlogArticle({ blog }) {
  const category = blog.categories?.[0];
  const readingTime = blog.customFields?.readingTime;
  const articlePath = `/blog/${blog.slug}`;
  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: blog.title, path: articlePath },
    ]),
    ...normalizeBlogSchemas(blog.structuredData, blog.slug, company.url),
  ];

  if (!blog.structuredData?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.excerpt,
      image: blog.featuredImage,
      datePublished: blog.publishDate,
      dateModified: blog.updatedAt,
      author: { '@type': 'Person', name: blog.authorName || company.name },
      publisher: { '@id': `${company.url}/#organization` },
      mainEntityOfPage: `${company.url}${articlePath}`,
    });
  }

  return (
    <>
      <Seo
        title={blog.meta?.seoTitle || blog.title}
        description={blog.meta?.seoDescription || blog.excerpt}
        path={articlePath}
        image={blog.featuredImage}
        type="article"
        publishedTime={blog.publishDate}
        modifiedTime={blog.updatedAt}
        author={blog.authorName}
        tags={blog.tags}
        schemas={schemas}
      />

      <article className="pb-20 sm:pb-28">
        <header className="border-b border-ink-200 bg-ink-50 py-10 dark:border-ink-800 dark:bg-ink-950 sm:py-16">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm text-ink-400">
              <Link href="/" className="transition-colors hover:text-maple-600">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog" className="transition-colors hover:text-maple-600">Blog</Link>
              <span aria-hidden="true">›</span>
              <span className="max-w-[45vw] truncate" aria-current="page">{blog.title}</span>
            </nav>

            <div className="mx-auto max-w-5xl text-center">
              {category && <p className="text-xs font-bold uppercase tracking-[0.2em] text-maple-600">{category}</p>}
              <h1 className="mt-5 text-display-xl">{blog.title}</h1>
              {blog.excerpt && (
                <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-500 dark:text-ink-300 sm:text-lg">
                  {blog.excerpt}
                </p>
              )}
              <div className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold text-ink-400">
                {blog.authorName && <span>By {blog.authorName}</span>}
                {blog.publishDate && <time dateTime={blog.publishDate}>{formatDate(blog.publishDate)}</time>}
                {readingTime && <span>{readingTime}</span>}
              </div>
            </div>
          </Container>
        </header>

        <Container className="pt-10 sm:pt-14">
          {blog.featuredImage && (
            <figure className="relative mx-auto mb-10 aspect-[16/9] max-w-6xl overflow-hidden rounded-3xl bg-ink-100 shadow-lift dark:bg-ink-900 sm:mb-14">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                priority
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="object-cover"
              />
            </figure>
          )}

          <div
            className="blog-prose mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: blog.sanitizedBody }}
          />

          <aside className="mx-auto mt-12 max-w-3xl rounded-3xl bg-navy-gradient p-8 text-center shadow-lift sm:p-12">
            <h2 className="text-2xl text-white sm:text-3xl">Every immigration situation is different.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">Get advice tailored to your circumstances from a regulated Canadian immigration consultant.</p>
            <Button href="/#contact" variant="light" size="lg" withArrow className="mt-7">
              Book a consultation
            </Button>
          </aside>
        </Container>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const { blog } = await getBlogBySlug(params.slug);
    return {
      props: {
        blog: {
          ...blog,
          sanitizedBody: sanitizeBlogBody(blog.bodyContent || blog.content || ''),
        },
      },
      revalidate: 300,
    };
  } catch (error) {
    if (error instanceof UpliftError && error.status === 404) return { notFound: true, revalidate: 60 };
    throw error;
  }
}
