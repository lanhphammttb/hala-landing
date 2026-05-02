"use client";

import { motion } from "framer-motion";
import { Hammer, Heart, ShieldCheck, Truck } from "lucide-react";

const steps = [
  { icon: Hammer, title: "Làm tay 100%", desc: "Tỉ mỉ từng mũi len" },
  { icon: Heart, title: "Làm bằng tâm", desc: "Gói ghém sự ấm áp" },
  { icon: ShieldCheck, title: "Bền bỉ", desc: "Chất liệu cao cấp" },
  { icon: Truck, title: "Giao nhanh", desc: "Tận tay bạn" },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-20 px-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-[#2C2420]/5 flex flex-wrap justify-between items-center gap-12">
           {steps.map((s, i) => (
             <motion.div
               key={s.title}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex items-center gap-6 group"
             >
                <div className="w-14 h-14 rounded-2xl bg-[#C59D5F]/10 flex items-center justify-center text-[#C59D5F] group-hover:bg-[#C59D5F] group-hover:text-white transition-all duration-500">
                   <s.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                   <h3 className="text-base font-bold text-[#2C2420]">{s.title}</h3>
                   <p className="text-xs text-[#2C2420]/40 uppercase tracking-widest">{s.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
