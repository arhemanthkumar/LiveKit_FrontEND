export function FeatureCards() {
  const items = ['Education', 'Experience', 'Projects', 'Skills', 'Achievements'];
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {items.map((it) => (
        <div key={it} className="rounded-md bg-[#081827] px-4 py-2 text-sm">
          {it}
        </div>
      ))}
    </div>
  );
}
