const items = [
  'Super Visa',
  'Visitor Visa',
  'Work Permit',
  'Study Permit',
  'Permanent Residence',
  'Express Entry',
  'Family Sponsorship',
  'Spousal Sponsorship',
  'LMIA Services',
  'Citizenship',
  'Refugee Claims',
  'Humanitarian & Compassionate Applications',
  'Travel Documents',
  'Refugee Appeals',
];

const Separator = () => (
  <span className="mx-5 text-white/50" aria-hidden="true">✦</span>
);

export default function TickerBar() {
  return (
    <div className="overflow-hidden bg-red-700 py-2 text-white" aria-label="Immigration services">
      <div className="ticker-track flex w-max">
        {/* Duplicate for seamless loop */}
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <li key={i} className="flex items-center whitespace-nowrap text-xs font-bold uppercase tracking-widest">
                {item}
                <Separator />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
