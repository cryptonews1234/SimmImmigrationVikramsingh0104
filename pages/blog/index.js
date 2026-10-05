import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/common/Seo';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import company from '@/data/company';
import { breadcrumbSchema, organizationSchema } from '@/seo/schema';
import { getAllBlogs } from '@/lib/uplift';

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

function BlogCard({ blog, priority }) {
  const category = blog.categories?.[0];

  return (
    <article className="group overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900">
      <Link href={`/blog/${blog.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-navy-900">
        {blog.featuredImage ? (
          <Image
            src={blog.featuredImage}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 bg-navy-gradient" aria-hidden="true" />
        )}
      </Link>
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
          {category && <span className="text-maple-600 dark:text-maple-400">{category}</span>}
          {category && blog.publishDate && <span className="text-ink-300">•</span>}
          {blog.publishDate && (
            <time dateTime={blog.publishDate} className="text-ink-400 dark:text-ink-500">
              {formatDate(blog.publishDate)}
            </time>
          )}
        </div>
        <h2 className="mt-4 text-xl leading-snug sm:text-2xl">
          <Link href={`/blog/${blog.slug}`} className="transition-colors group-hover:text-maple-600">
            {blog.title}
          </Link>
        </h2>
        {blog.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-ink-500 dark:text-ink-300">
            {blog.excerpt}
          </p>
        )}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-maple-600 transition-colors hover:text-maple-700 dark:text-maple-400"
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function BlogIndex({ blogs }) {
  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Simmi Immigration Blog',
      url: `${company.url}/blog`,
      publisher: { '@id': `${company.url}/#organization` },
      blogPost: blogs.slice(0, 20).map((blog) => ({
        '@type': 'BlogPosting',
        headline: blog.title,
        url: `${company.url}/blog/${blog.slug}`,
        datePublished: blog.publishDate,
        image: blog.featuredImage || undefined,
      })),
    },
  ];

  return (
    <>
      <Seo
        title="Canada Immigration Blog"
        description="Practical Canadian immigration guides for visitors, students, workers, families and permanent residence applicants from Simmi Immigration."
        path="/blog"
        schemas={schemas}
      />

      <section className="relative overflow-hidden border-b border-ink-200 bg-ink-50 py-20 dark:border-ink-800 dark:bg-ink-950 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(210,37,54,0.12),transparent_35%)]" aria-hidden="true" />
        <Container className="relative text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-maple-600">Immigration insights</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-display-xl">
            Clear guidance for your <span className="text-gradient">journey to Canada.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-500 dark:text-ink-300 sm:text-lg">
            Practical articles about Canadian visas, permits, sponsorship, refusals and permanent residence.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mb-10 sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-maple-600">From our team</p>
            <h2 className="mt-3 text-display-md">Latest articles</h2>
          </div>

          {blogs.length ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog, index) => (
                <BlogCard key={blog.id || blog.slug} blog={blog} priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-ink-200 bg-ink-50 p-10 text-center dark:border-ink-800 dark:bg-ink-900">
              <h2 className="text-2xl">New insights are coming soon.</h2>
              <p className="mt-3 text-ink-500 dark:text-ink-300">Please check back for immigration guides and updates.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-ink-200 bg-navy-gradient py-16 text-center dark:border-ink-800 sm:py-20">
        <Container>
          <h2 className="text-3xl text-white sm:text-4xl">Need advice for your situation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">Get a confidential assessment and a clear recommendation for your next step.</p>
          <Button href="/#contact" variant="light" size="lg" withArrow className="mt-7">
            Book a consultation
          </Button>
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return { props: { blogs }, revalidate: 300 };
}
