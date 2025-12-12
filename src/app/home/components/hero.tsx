"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 relative overflow-hidden">
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        {/* Texto Principal - REDUZIDO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-5xl tracking-tight font-bold"
        >
          Soluções que transformam
          <br />
          Tecnologia que impulsiona.
        </motion.h1>

        {/* Subtítulo - REDUZIDO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-xl py-4 md:py-6"
        >
          Desenvolvemos sistemas inteligentes que automatizam processos,
          otimizam resultados e mantêm sua empresa segura - sem mudar a forma
          como suas equipes trabalham.
        </motion.p>

        {/* Botões - REDUZIDOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <button className="px-6 py-3 text-sm md:text-base rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]">
            Começar teste gratuito
          </button>
          <button className="px-6 py-3 text-sm md:text-base rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all duration-200 border border-neutral-800">
            Ver demonstrações
          </button>
        </motion.div>

        {/* Container da Imagem com Perspectiva 3D - ESPAÇAMENTO REDUZIDO */}
        <div className="relative">
          <div className="relative min-h-72 sm:min-h-80 md:min-h-[400px] lg:min-h-[560px] w-full pt-8 md:pt-12 translate-x-10 md:translate-x-28">
            {/* Primeira Imagem - Base */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="perspective-[4000px] shadow-2xl"
            >
              <div className="relative">
                <Image
                  alt="Dashboard Pacsys"
                  draggable={false}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="absolute inset-0 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-20 mask-b-from-20"
                  style={{
                    transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                  }}
                  src="/images/4.webp"
                />
              </div>
            </motion.div>

            {/* Segunda Imagem - Offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
            >
              <div className="relative">
                <Image
                  alt="Dashboard Pacsys"
                  draggable={false}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="absolute inset-0 -translate-x-10 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-50 mask-b-from-50"
                  style={{
                    transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                  }}
                  src="/images/4.webp"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradiente de Fade no Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-[400px] w-full mask-t-from-10 dark:bg-black z-50" />
    </section>
  );
}