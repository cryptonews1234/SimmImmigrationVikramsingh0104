import { motion } from 'framer-motion';
import { EASE, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/seo/schema';
import { categoryBreadcrumb } from '@/data/serviceCategories';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';

export default function ServicePage({ slug, data }) {
  const isSuperVisaClusterPage = slug.startsWith('super-visa-');
  const isSuperVisaIncomeRequirementPage = slug === 'super-visa-income-requirement';
  const sectionHeadingClass = isSuperVisaClusterPage
    ? 'max-w-none [&_h2]:font-sans [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-display-md'
    : 'text-[clamp(1.65rem,3.2vw,2.55rem)] leading-[1.12]';
  const heroTitleClassName = isSuperVisaClusterPage ? 'font-sans tracking-[-0.01em]' : undefined;
  const heroTitleSizeClassName = isSuperVisaClusterPage
    ? 'text-[clamp(1.55rem,2.9vw,2.4rem)]'
    : undefined;
  const formWrapperClassName = isSuperVisaClusterPage ? 'lg:-mt-6' : undefined;
  const formCompact = isSuperVisaClusterPage;
  const subheadingClassName = isSuperVisaClusterPage
    ? 'font-sans text-3xl font-bold tracking-[-0.01em]'
    : 'font-display text-lg font-bold';

  const {
    meta,
    hero,
    quickFacts = [],
    prose = [],
    cards = [],
    comparison,
    documents,
    process = [],
    why = [],
    faqs = [],
    help,
    related = [],
    category,
  } = data;
  const heroFacts = isSuperVisaClusterPage ? [] : quickFacts;
  const proseAnchorId = (heading) =>
    heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  const onThisPageItems = isSuperVisaIncomeRequirementPage
    ? prose.map((block) => ({ label: block.heading, href: `#${proseAnchorId(block.heading)}` }))
    : [];

  const path = `/services/${slug}`;
  const cat = categoryBreadcrumb[category];
  const breadcrumbs = cat ? [cat] : [];

  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      ...(cat ? [{ name: cat.label, path: cat.href }] : []),
      { name: hero.eyebrow, path },
    ]),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  const sections = [];

  if (prose.length > 0) {
    sections.push({
      id: 'overview',
      render: (muted) => (
        <Section key="overview" id="overview" muted={muted}>
          <div className="mx-auto max-w-[1320px] space-y-16">
            {prose.map((block, index) => (
              <div key={block.heading} id={proseAnchorId(block.heading)} className="scroll-mt-24 space-y-5">
                <SectionHeading
                  eyebrow={index === 0 ? 'Overview' : undefined}
                  title={block.heading}
                  className={sectionHeadingClass}
                />
                <Reveal className="space-y-5 max-w-[1100px]">
                  {(block.paragraphs || []).map((text) => (
                    <p key={text.slice(0, 30)} className="text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">
                      {text}
                    </p>
                  ))}
                  {block.items && (
                    <ul className="space-y-3 rounded-2xl border border-ink-200 bg-ink-50/60 p-6 dark:border-ink-800 dark:bg-ink-900/50">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.table && (
                    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
                      <table className="w-full border-collapse text-left text-[15px]">
                        <thead className="bg-ink-50 dark:bg-ink-800/60">
                          <tr>
                            {block.table.headers.map((header) => (
                              <th
                                key={header}
                                className="px-5 py-3 font-semibold text-ink-900 dark:text-white"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.table.rows.map((row, rowIndex) => (
                            <tr
                              key={row[0]}
                              className={rowIndex === block.table.rows.length - 1 ? 'border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900' : 'border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900'}
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`px-5 py-3 text-ink-600 dark:text-ink-300 ${cellIndex === row.length - 1 ? 'text-right font-medium text-ink-900 dark:text-white' : ''}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {block.closing && (
                    <p className="border-l-4 border-ink-200 pl-5 text-[17px] leading-relaxed text-ink-600 dark:border-ink-700 dark:text-ink-300">
                      {block.closing}
                    </p>
                  )}
                  {block.faqs && (
                    <div className="pt-2">
                      <Accordion items={block.faqs} allowMultiple startClosed />
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </Section>
      ),
    });
  }

  if (comparison) {
    sections.push({
      id: 'comparison',
      render: (muted) => (
        <Section key="comparison" id="comparison" muted={muted}>
          <SectionHeading
            eyebrow="Compare"
            title={comparison.heading}
            description={comparison.description}
            className={sectionHeadingClass}
          />
          <Reveal className="mx-auto mt-12 max-w-[1320px] overflow-hidden rounded-3xl border border-ink-200 shadow-soft dark:border-ink-800">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr className="bg-maple-gradient text-white">
                    <th className="px-6 py-4 text-sm font-bold">Feature</th>
                    <th className="px-6 py-4 text-sm font-bold">Visitor Visa</th>
                    <th className="px-6 py-4 text-sm font-bold">Super Visa</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ delay: index * 0.06, duration: 0.5 }}
                      className="border-t border-ink-200 bg-white transition-colors hover:bg-maple-50/60 dark:border-ink-800 dark:bg-ink-900 dark:hover:bg-ink-800/60"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-ink-900 dark:text-white">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-ink-500 dark:text-ink-300">{row.visitor}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-maple-700 dark:text-maple-300">
                        {row.superVisa}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      ),
    });
  }

  if (documents?.items?.length) {
    sections.push({
      id: 'documents',
      render: (muted) => (
        <Section key="documents" id="documents" muted={muted}>
          <SectionHeading
            eyebrow="Checklist"
            title={documents.heading}
            description={documents.description}
            className={sectionHeadingClass}
          />
          <ul className="mx-auto mt-12 grid max-w-[1320px] gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {documents.items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: EASE }}
                className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-colors hover:border-maple-200 dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-maple-50 text-xs font-bold text-maple-600 dark:bg-ink-800 dark:text-maple-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </Section>
      ),
    });
  }

  if (process.length > 0) {
    sections.push({
      id: 'process',
      render: (muted) => (
        <Section key="process" id="process" muted={muted}>
          <SectionHeading eyebrow="Step by step" title="How the process works" className={sectionHeadingClass} />
          <ol className="mx-auto mt-12 grid max-w-[1320px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 pr-16 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-maple-gradient font-display text-base font-extrabold text-white shadow-soft">
                  {index + 1}
                </span>
                <h3 className={`relative text-ink-900 dark:text-white ${subheadingClassName}`}>{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </Section>
      ),
    });
  }
  if (why.length > 0) {
    sections.push({
      id: 'why-us',
      render: (muted) => (
        <Section key="why-us" id="why-us" muted={muted}>
          <SectionHeading
            eyebrow="Why us"
            title="What you get working with Simmi Immigration"
            align="center"
            className={sectionHeadingClass}
          />
          <div className="mx-auto mt-12 grid max-w-[1320px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: EASE }}
                className="rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-maple-gradient font-display text-base font-extrabold text-white shadow-soft">
                  {item.letter}
                </span>
                <h3 className={`mt-5 text-ink-900 dark:text-white ${subheadingClassName}`}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      ),
    });
  }

  if (faqs.length > 0) {
    sections.push({
      id: 'faq',
      render: (muted) => (
        <Section key="faq" id="faq" muted={muted}>
          <SectionHeading
            eyebrow="Answers"
            title="Frequently asked questions"
            className={sectionHeadingClass}
          />
          <div className="mx-auto mt-12 max-w-[1320px]">
            <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
              {faqs.map((item) => (
                <Accordion key={item.q || item.question} items={[item]} allowMultiple />
              ))}
            </div>
          </div>
        </Section>
      ),
    });
  }

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={path} schemas={schemas} />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleAccent={hero.titleAccent}
        titleClassName={heroTitleClassName}
        titleSizeClassName={heroTitleSizeClassName}
        formWrapperClassName={formWrapperClassName}
        formCompact={formCompact}
        intro={hero.intro}
        updated={meta.updated}
        image={hero.image}
        imageAlt={hero.imageAlt}
        facts={heroFacts}
        breadcrumbs={breadcrumbs}
      />

      {isSuperVisaIncomeRequirementPage && onThisPageItems.length > 0 && (
        <section aria-label="On this page" className="bg-white pb-8 pt-0 dark:bg-ink-950">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="mx-auto max-w-[1100px] border-t border-ink-200 pt-5 dark:border-ink-800">
              <h2 className="font-sans text-4xl font-bold tracking-[-0.01em] text-ink-700 dark:text-ink-100">On This Page</h2>
              <ul className="mt-4 list-disc space-y-0.5 pl-6 text-lg leading-normal text-ink-600 dark:text-ink-300">
                {onThisPageItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-maple-700 dark:hover:text-maple-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {sections.map((section, index) => section.render(index % 2 === 1))}

      <ServiceCta help={help} related={related} />
    </>
  );
}