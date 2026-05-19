import { Hammer, Heart, ShieldCheck, Truck } from "lucide-react";

const steps = [
  { icon: Hammer, title: "Làm tay 100%" },
  { icon: Heart, title: "Tận tâm" },
  { icon: ShieldCheck, title: "Bền bỉ" },
  { icon: Truck, title: "Giao nhanh" },
];

export default function FleurServices() {
  return (
    <section id="services" className="bg-[#FAF7F2] px-5 py-7 sm:px-6 sm:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[#2C2420]/5 bg-white p-4 shadow-sm sm:gap-4 sm:p-6 md:grid-cols-4 md:p-8">
           {steps.map((s) => (
             <div
               key={s.title}
               className="flex min-w-0 items-center gap-2.5 sm:gap-3 group"
             >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C59D5F]/10 text-[#C59D5F] sm:h-10 sm:w-10">
                   <s.icon size={18} strokeWidth={2} />
                </div>
                <p className="min-w-0 text-[13px] font-bold leading-snug text-[#2C2420] sm:text-sm">{s.title}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
