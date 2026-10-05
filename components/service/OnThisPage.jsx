export default function OnThisPage({ items }) {
  if (!items?.length) return null;

  return (
    <section aria-label="On this page" className="bg-white pb-8 pt-0 dark:bg-ink-950">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[1100px] border-t border-ink-200 pt-5 dark:border-ink-800">
          <h2 className="font-sans text-3xl font-bold tracking-[-0.01em] text-ink-700 dark:text-ink-100 sm:text-4xl">
            On This Page
          </h2>
          <ul className="mt-4 grid list-disc gap-x-10 gap-y-1 pl-6 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:grid-cols-2">
            {items.map((item) => (
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
  );
}
