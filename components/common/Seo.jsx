import Head from 'next/head';
import buildMeta from '@/seo/buildMeta';
import { defaultSEO } from '@/seo/seo.config';

export default function Seo({
  title,
  description,
  path,
  image,
  keywords,
  noindex,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags = [],
  schemas = [],
}) {
  const meta = buildMeta({ title, description, path, image, keywords, noindex });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.canonical} />
      <meta name="robots" content={meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content={defaultSEO.locale} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:alt" content={defaultSEO.siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {(tags || []).map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
