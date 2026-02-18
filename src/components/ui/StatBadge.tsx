interface StatBadgeProps {
  stat: string;
  label: string;
}

export default function StatBadge({ stat, label }: StatBadgeProps) {
  return (
    <div className="inline-flex items-center gap-[0.8rem] rounded-full border border-[#272523]/10 bg-[#fafafa] px-[1.6rem] py-[1rem] w-fit">
      <span className="text-[1.6rem] font-bold text-[#272523] leading-none">
        {stat}
      </span>
      <span className="text-[1.1rem] text-[#999] uppercase tracking-[0.05em] leading-none">
        {label}
      </span>
    </div>
  );
}
