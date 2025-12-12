"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export function SectionSolution() {
    return (
        <section className="pt-16 md:pt-20 lg:pt-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl px-4 md:px-8 mx-auto">
                <div className="pl-0 md:pl-4 lg:pl-8 pt-4 md:pt-6">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold">
                        <LayoutTextFlip
                            text="Soluções que"
                            words={["transformam", "inovam", "impulsionam", "protegem"]}
                            duration={3000}
                        />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl py-4 md:py-6"
                    >
                        Desenvolvemos sistemas inteligentes que automatizam processos,
                        otimizam resultados e mantêm sua empresa segura - sem mudar a forma
                        como suas equipes trabalham.
                    </motion.p>

                    {/* Botão clicável */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        href="#solutions"
                        className="bg-pacsys-light hover:bg-pacsys-dark text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block pointer-events-auto"
                        style={{ position: "relative", zIndex: 25 }}
                    >
                        Conheça as Soluções
                    </motion.a>
                </div>

                <div className="relative pb-16 md:pb-20">
                    <div className="relative min-h-60 sm:min-h-72 md:min-h-80 lg:min-h-96 w-full pt-12 md:pt-16 translate-x-10 md:translate-x-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="perspective-[4000px] shadow-2xl"
                        >
                            <div className="relative">
                                <Image
                                    alt="Dashboard Pacsys"
                                    draggable={false}
                                    loading="eager"
                                    width={1920}
                                    height={1080}
                                    className="absolute inset-0 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-20 mask-b-from-20"
                                    style={{
                                        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                                    }}
                                    src="/images/placeholder-2.png"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="perspective-[4000px] translate-x-20 -translate-y-8 md:-translate-y-16 lg:-translate-y-24"
                        >
                            <div className="relative">
                                <Image
                                    alt="Dashboard Pacsys"
                                    draggable={false}
                                    loading="eager"
                                    width={1920}
                                    height={1080}
                                    className="absolute inset-0 -translate-x-10 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-50 mask-b-from-50"
                                    style={{
                                        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                                    }}
                                    src="/images/placeholder-1.png"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 w-full bg-gradient-to-t from-background to-transparent z-50 pointer-events-none" />
        </section>
    );
}