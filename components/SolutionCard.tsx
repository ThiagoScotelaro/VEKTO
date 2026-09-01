import { ArrowRight, type LucideIcon } from "lucide-react";

export default function SolutionCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col rounded-[14px] border border-[#e6eaf0] bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_28px_rgba(16,24,40,0.08)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
        <Icon size={22} strokeWidth={1.75} className="text-brand" />
      </div>

      <h3 className="mt-5 text-[19px] font-semibold text-[#0a0a0a]">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-[#5b6472]">
        {description}
      </p>

      <div className="mt-6 text-brand transition-transform duration-200 group-hover:translate-x-1">
        <ArrowRight size={20} strokeWidth={2.25} />
      </div>
    </div>
  );
}
