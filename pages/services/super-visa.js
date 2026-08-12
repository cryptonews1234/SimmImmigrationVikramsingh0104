import Image from 'next/image';
import { motion } from 'framer-motion';
import superVisa from '@/data/superVisa';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';
import FaqTabs from '@/components/service/FaqTabs';

const {
  meta,
  hero,
  intro,
  whatIsIt,
  comparison,
  eligibility,
  incomeRequirements,
  insurance,
  documents,
  invitationLetter,
  refusalReasons,
  faqGroups,
  help,
} = superVisa;

export default function SuperVisaPage() {
  const flatFaqs = faqGroups.flatMap((group) => group.items).slice(0, 12);
  const sectionHeadingClass = 'max-w-none [&_h2]:font-sans [&_h2]:font-bold [&_h2]:tracking-[-0.01em]';

  const onThisPageItems = [
    { label: 'Super Visa Canada for parents and grandparents', href: '#overview' },
    { label: 'What is a Super Visa?', href: '#what-is-a-super-visa' },
    { label: 'Super Visa vs. Regular Visitor Visa', href: '#comparison' },
    { label: 'Who Can Apply and Who Can Be the Host', href: '#eligibility' },
    { label: 'Super Visa Income Requirements', href: '#income-requirements' },
    { label: 'Super Visa medical insurance', href: '#insurance' },
    { label: 'Super Visa Required Documents', href: '#documents' },
    { label: 'Super Visa Invitation Letter', href: '#invitation-letter' },
    { label: 'Super Visa Refusal Reasons', href: '#risks' },
    { label: 'Super Visa frequently asked questions', href: '#faq' },
  ];

  const schemas = [
    organizationSchema(),
    faqSchema(flatFaqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Super Visa', path: meta.path },
    ]),
  ];

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={meta.path} schemas={schemas} />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        headline={hero.headline}
        titleAccent={hero.titleAccent}
        titleSizeClassName="text-[clamp(1.55rem,2.9vw,2.4rem)]"
        headlineSizeClassName="text-[clamp(1.35rem,2.5vw,2rem)]"
        titleClassName="font-sans tracking-[-0.01em]"
        headlineClassName="font-sans tracking-[-0.01em]"
        formWrapperClassName="lg:-mt-4"
        formCompact
        intro={hero.intro}
        updated={meta.updated}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      <section aria-label="On this page" className="bg-white pb-8 pt-0 dark:bg-ink-950">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="mx-auto max-w-[1100px] border-t border-ink-200 pt-5 dark:border-ink-800">
            <h2 className="font-sans text-4xl font-bold tracking-[-0.01em] text-ink-700 dark:text-ink-100">On This Page</h2>
            <ul className="mt-4 list-disc space-y-0.5 pl-6 text-lg leading-normal text-ink-600 dark:text-ink-300">
              {onThisPageItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-maple-700 dark:hover:text-maple-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section id="overview">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Overview"
            title={intro.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {intro.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}

            {intro.guideLead && (
              <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300">{intro.guideLead}</p>
            )}

            {intro.guideItems?.length > 0 && (
              <ul className="list-disc space-y-0.5 pl-6 text-base leading-normal text-ink-600 dark:text-ink-300">
                {intro.guideItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {intro.closing && <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300">{intro.closing}</p>}

            {(intro.helpLead || intro.helpText) && (
              <p className="border-l-4 border-ink-200 pl-5 text-base leading-relaxed text-ink-600 dark:border-ink-700 dark:text-ink-300">
                {intro.helpLead && <strong className="text-ink-900 dark:text-white">{intro.helpLead} </strong>}
                {intro.helpText}
              </p>
            )}
          </Reveal>
        </div>
      </Section>

      {/* What is it + benefits */}
      <Section muted id="what-is-a-super-visa">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="The basics"
            title={whatIsIt.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {whatIsIt.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
          </Reveal>

          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto mt-8 max-w-[1200px] space-y-0.5 rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900"
          >
            <li className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-maple-600">Key features</li>
            {whatIsIt.benefits.map((benefit) => (
              <motion.li key={benefit} variants={fadeUp} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Comparison table */}
      <Section id="comparison">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Compare"
            title={comparison.heading}
            description={comparison.description}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />

          <Reveal className="mt-12 overflow-hidden rounded-3xl border border-ink-200 shadow-soft dark:border-ink-800">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="bg-maple-gradient text-white">
                  <th className="px-6 py-3 text-sm font-bold leading-tight">Feature</th>
                  <th className="px-6 py-3 text-sm font-bold leading-tight">Visitor Visa</th>
                  <th className="px-6 py-3 text-sm font-bold leading-tight">Super Visa</th>
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
                    <td className="px-6 py-3 text-sm font-semibold leading-snug text-ink-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-3 text-sm leading-snug text-ink-500 dark:text-ink-300">{row.visitor}</td>
                    <td className="px-6 py-3 text-sm font-semibold leading-snug text-maple-700 dark:text-maple-300">{row.superVisa}</td>
                  </motion.tr>
                ))}
              </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Eligibility */}
      <Section muted id="eligibility">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can Apply and Who Can Be the Host"
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <div className="mt-8 space-y-10">
          {eligibility.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <div className={index > 0 ? 'border-t border-ink-200 pt-8 dark:border-ink-800' : ''}>
                <h3 className="flex items-center gap-3 font-sans text-3xl font-bold leading-tight text-ink-900 dark:text-white">
                  <Icon name={block.icon} className="h-5 w-5 shrink-0 text-maple-600" />
                  {block.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-600 dark:text-ink-300">{block.intro}</p>
                <ul className="mt-6 space-y-0.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-lg leading-normal text-ink-700 dark:text-ink-200">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          </div>
        </div>
      </Section>

      <Section id="income-requirements">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Financial proof"
            title={incomeRequirements.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {incomeRequirements.paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
            <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">{incomeRequirements.closing}</p>
            <Button
              href={incomeRequirements.link.href}
              variant="primary"
              size="md"
              className="w-fit shadow-soft"
            >
              Learn more about Super Visa Income Requirements →
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Insurance */}
      <Section muted id="insurance">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Insurance"
            title={insurance.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <div className="mt-12 grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-ink-200 shadow-lift dark:border-ink-800">
              <Image
                src={insurance.image}
                alt={insurance.imageAlt}
                width={900}
                height={700}
                className="h-80 w-full object-cover lg:h-[26rem]"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-ink-950/85 px-5 py-4 backdrop-blur-xl"
              >
                <p className="font-display text-2xl font-extrabold text-white">$100,000+</p>
                <p className="mt-0.5 text-xs text-white/60">minimum emergency coverage</p>
              </motion.div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              {insurance.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  {text}
                </p>
              ))}
              <ul className="mt-7 space-y-0.5">
                {insurance.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300">
                {insurance.footnote}
              </p>
              <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                <Icon name="badge" className="mt-0.5 h-5 w-5 shrink-0 text-maple-600" />
                {insurance.medicalNote}
              </p>
            </Reveal>
          </div>
          </div>
          <Button href="/services/super-visa-insurance-guide" size="md" withArrow className="mt-8 w-fit shadow-soft">
            Learn more about Super Visa Medical Insurance
          </Button>
        </div>
      </Section>

      {/* Documents */}
      <Section id="documents">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Checklist"
            title={documents.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {documents.paragraphs?.map((text) => (
              <p key={text.slice(0, 36)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}

            {documents.checklist?.length > 0 && (
              <ul className="list-disc space-y-0 pl-7 text-lg leading-normal text-ink-600 dark:text-ink-300">
                {documents.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {documents.closing?.map((text) => (
              <p key={text.slice(0, 36)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section muted id="invitation-letter">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Invitation letter"
            title={invitationLetter.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {invitationLetter.paragraphs?.map((text) => (
              <p key={text.slice(0, 36)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}

            {invitationLetter.checklist?.length > 0 && (
              <ul className="list-disc space-y-0 pl-7 text-lg leading-normal text-ink-600 dark:text-ink-300">
                {invitationLetter.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {invitationLetter.closing?.map((text) => (
              <p key={text.slice(0, 36)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Refusal reasons */}
      <Section id="risks">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Refusal reasons"
            title={refusalReasons.heading}
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <Reveal className="mt-8 space-y-5">
            {refusalReasons.paragraphs?.map((text) => (
              <p key={text.slice(0, 36)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}

            {refusalReasons.items?.length > 0 && (
              <ul className="list-disc space-y-0 pl-7 text-lg leading-normal text-ink-600 dark:text-ink-300">
                {refusalReasons.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {refusalReasons.closing && (
              <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">{refusalReasons.closing}</p>
            )}
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted id="faq">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Answers"
            title="Super Visa frequently asked questions"
            description="Pick a category to jump straight to the questions families ask us most."
            className={`${sectionHeadingClass} [&_h2]:text-display-md`}
          />
          <FaqTabs groups={faqGroups} />
        </div>
      </Section>

      <ServiceCta
        help={help}
        cardTitle="Start your Super Visa file"
        cardBody="Book a consultation and we will confirm eligibility, calculate the income threshold for your family size, and build the document plan before anything is filed."
      />
    </>
  );
}
