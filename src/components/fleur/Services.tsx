"use client";

import { Hammer, Heart, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Hammer, title: "Làm tay 100%" },
  { icon: Heart, title: "Tận tâm" },
  { icon: ShieldCheck, title: "Bền bỉ" },
  { icon: Truck, title: "Giao nhanh" },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-8 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#2C2420]/5 grid grid-cols-2 md:grid-cols-4 gap-4">
           {steps.map((s, i) => (
             <motion.div
               key={s.title}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex items-center gap-3 group"
             >
                <div className="w-10 h-10 rounded-xl bg-[#C59D5F]/10 flex items-center justify-center text-[#C59D5F] shrink-0">
                   <s.icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-[#2C2420] whitespace-nowrap">{s.title}</h3>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
