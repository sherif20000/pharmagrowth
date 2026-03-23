interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="bg-navy-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-accent-500 mb-1">
                {stat.value}
              </p>
              <p className="text-navy-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
