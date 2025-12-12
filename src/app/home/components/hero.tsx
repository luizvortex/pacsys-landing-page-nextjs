"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="pt-24 md:pt-28 lg:pt-32 relative overflow-hidden bg-background">
            <div className="max-w-7xl px-4 md:px-8 mx-auto">
                <div className="pl-0 md:pl-4 lg:pl-8 pt-8 md:pt-12">
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-sm md:text-base text-muted-foreground max-w-xl py-4 md:py-6"
                    >
                        Desenvolvemos sistemas inteligentes que automatizam processos,
                        otimizam resultados e mantêm sua empresa segura - sem mudar a forma
                        como suas equipes trabalham.
                    </motion.p>
                </div>

                <div className="relative">
                    <div className="relative min-h-72 sm:min-h-80 md:min-h-[400px] lg:min-h-[560px] w-full pt-8 md:pt-12 translate-x-10 md:translate-x-28">
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
                                    loading="eager"
                                    width={1920}
                                    height={1080}
                                    className="absolute inset-0 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-20 mask-b-from-20"
                                    style={{
                                        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                                    }}
                                    src="/images/4.webp"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                                />
                            </div>
                        </motion.div>

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
                                    loading="eager"
                                    width={1920}
                                    height={1080}
                                    className="absolute inset-0 -translate-x-10 rounded-lg shadow-xl select-none pointer-events-none mask-r-from-50 mask-b-from-50"
                                    style={{
                                        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
                                    }}
                                    src="/images/4.webp"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-40 md:h-[400px] w-full mask-t-from-10 bg-background z-50" />
        </section>
    );
}