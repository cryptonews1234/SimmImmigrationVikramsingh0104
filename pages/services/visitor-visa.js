import { motion } from 'framer-motion';
import visitorVisa from '@/data/visitorVisa';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';
import OnThisPage from '@/components/service/OnThisPage';

const {
  meta,
  hero,
  quickFacts,
  whatIsIt,
  pillars,
  documents,
  risksHeading,
  risks,
  risksNote,
  comparison,
  extension,
  process,
  why,
  faqs,
  help,
} = visitorVisa;

const onThisPageItems = [
  { label: 'What is a Visitor Visa?', href: '#overview' },
  { label: 'What officers look at', href: '#requirements' },
  { label: 'Document checklist', href: '#documents' },
  { label: 'Common refusal concerns', href: '#risks' },
  { label: 'Visitor Visa vs. Super Visa', href: '#comparison' },
  { label: 'Extending visitor status', href: '#extension' },
  { label: 'How the process works', href: '#process' },
  { label: 'How we can help', href: '#why-us' },
  { label: 'Frequently asked questions', href: '#faq' },
];

export default function VisitorVisaPage() {
  const schemas = [
    organizationSchema(),
    serviceSchema({ name: 'Visitor Visa', description: meta.description, path: meta.path, category: 'Temporary Residence' }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Visitor Visa', path: meta.path },
    ]),
  ];

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} schemas={schemas} />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleAccent={hero.titleAccent}
        intro={hero.intro}
        updated={meta.updated}
        image={hero.image}
        imageAlt={hero.imageAlt}
        facts={quickFacts}
      />

      <OnThisPage items={onThisPageItems} />

      {/* What is it */}
      <Section id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title={whatIsIt.heading} />
            <Reveal delay={0.1}>
              {whatIsIt.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  {text}
                </p>
              ))}
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-3 rounded-3xl border border-ink-200 bg-white p-8 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:col-span-7"
          >
            <li className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-maple-600">
              What a visitor visa lets you do
            </li>
            {whatIsIt.benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeUp}
                className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300"
              >
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Four pillars */}
      <Section muted id="requirements">
        <SectionHeading
          eyebrow="What officers look at"
          title="Four things that decide most visitor visa files"
          description="Purpose, funds, ties and host proof. These are weighed together \u2014 a gap in one is usually what tips a borderline application."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="group h-full rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maple-200 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maple-50 text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:bg-ink-800">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{pillar.title}</h3>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <Section id="documents">
        <SectionHeading eyebrow="Checklist" title={documents.heading} description={documents.description} />
        <motion.ul
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {documents.items.map((item, index) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-colors hover:border-maple-200 dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-maple-50 text-xs font-bold text-maple-600 dark:bg-ink-800 dark:text-maple-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Refusal concerns */}
      <Section muted id="risks">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Avoid these" title={risksHeading} />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{risksNote}</p>
              <Button href="/#contact" size="md" className="mt-7" withArrow>
                Get a refusal review
              </Button>
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-3 lg:col-span-7"
          >
            {risks.map((risk) => (
              <motion.li
                key={risk}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white px-5 py-4 text-[15px] text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maple-600" />
                {risk}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Visitor Visa vs. Super Visa */}
      <Section id="comparison">
        <SectionHeading eyebrow="Compare" title={comparison.heading} description={comparison.description} />
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-ink-200 shadow-soft dark:border-ink-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <thead>
                <tr className="bg-maple-gradient text-white">
                  <th className="px-6 py-4 text-sm font-bold">Feature</th>
                  <th className="px-6 py-4 text-sm font-bold">Visitor Visa</th>
                  <th className="px-6 py-4 text-sm font-bold">Super Visa</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
                    <td className="px-6 py-4 text-sm font-semibold text-ink-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-ink-600 dark:text-ink-300">{row.visitor}</td>
                    <td className="px-6 py-4 text-sm text-ink-600 dark:text-ink-300">{row.superVisa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Extending visitor status */}
      <Section muted id="extension">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow="Stay longer" title={extension.heading} />
          <Reveal className="mt-7 space-y-5">
            {extension.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">{text}</p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/services/super-visa" variant="secondary">Compare the Super Visa</Button>
              <Button href="/#contact" withArrow>Review your options</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <SectionHeading
          eyebrow="Step by step"
          title="How we prepare your visitor visa"
          description="Six stages, from the first profile assessment to the decision."
        />
        <motion.ol
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {process.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="absolute right-4 top-3 font-display text-5xl font-extrabold text-ink-100 transition-colors group-hover:text-maple-100 dark:text-ink-800 dark:group-hover:text-maple-900/40">
                {index + 1}
              </span>
              <h3 className="relative font-display text-lg font-bold text-ink-900 dark:text-white">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Why us */}
      <Section muted id="why-us">
        <SectionHeading eyebrow="Why us" title="What you get working with Simmi Immigration" align="center" />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {why.map((item) => (
            <motion.div
              key={item.letter}
              variants={fadeUp}
              className="rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-maple-gradient font-display text-base font-extrabold text-white shadow-soft">
                {item.letter}
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Answers" title="Visitor visa FAQ" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
                Visiting parents or grandparents for a longer stay? The Super Visa may be the better route.
              </p>
              <Button href="/services/super-visa" size="md" variant="outline" className="mt-6">
                Explore the Super Visa
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} allowMultiple />
          </div>
        </div>
      </Section>

      <ServiceCta
        help={help}
        cardTitle="Start your visitor visa file"
        cardBody="We will confirm eligibility, shape the travel purpose, and build the document plan before anything is filed."
      />
    </>
  );
}
