"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cloud, 
  Code2, 
  BarChart3, 
  Smartphone, 
  Headset 
} from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Cibersegurança",
    description: "Proteção avançada para os seus dados e infraestrutura contra ameaças digitais modernas.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Solutions",
    description: "Migração e gestão de infraestrutura na nuvem para maior escalabilidade e redução de custos.",
    icon: Cloud,
  },
  {
    title: "Desenvolvimento de Software",
    description: "Aplicações web e mobile feitas à medida para resolver os desafios específicos do seu negócio.",
    icon: Code2,
  },
  {
    title: "Data Analytics",
    description: "Transforme dados brutos em insights valiosos para tomadas de decisão estratégicas.",
    icon: BarChart3,
  },
  {
    title: "Mobilidade Corporativa",
    description: "Soluções móveis integradas que permitem à sua equipa trabalhar de qualquer lugar.",
    icon: Smartphone,
  },
  {
    title: "Suporte Especializado",
    description: "Assistência técnica 24/7 para garantir que a sua operação nunca para.",
    icon: Headset,
  },
];

export function SectionServices() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Fundo com o Efeito Ripple */}
      <div className="absolute inset-0 z-0">
         <BackgroundRippleEffect />
      </div>

      {/* Camada de Gradiente para suavizar as bordas (opcional) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight"
          >
            Excelência em cada <span className="text-pacsys-light">solução</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Combinamos tecnologia de ponta com expertise estratégica para entregar resultados que impulsionam o seu crescimento.
          </motion.p>
        </div>

        {/* Grelha de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative p-8 rounded-2xl border transition-all duration-300",
                "bg-background/40 backdrop-blur-sm border-white/10 hover:border-pacsys-light/50",
                "dark:bg-zinc-900/40 dark:border-white/5 dark:hover:border-pacsys-light/50",
                "hover:shadow-2xl hover:shadow-pacsys-light/10 hover:-translate-y-1"
              )}
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-pacsys-light/10 text-pacsys-light group-hover:bg-pacsys-light group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-pacsys-light transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}