"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607469154378-376b8a0663c5?q=80&w=2070&auto=format&fit=crop",
];

export function Hero() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-dots-custom",
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "8px",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <section
      id="home-hero-slider"
      className="relative h-[70vh] w-full overflow-hidden"
    >
      {/* Slider (background, z-0) */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {slideImages.map((url, index) => (
            <div key={index} className="w-full h-[70vh]">
              <div
                className="w-full h-[70vh] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${url}')`,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay Escuro (z-10) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ zIndex: 10, opacity: 0.6 }}
      />

      {/* Conteúdo Centralizado (z-20) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold mb-4"
              style={{
                color: "#ffffff",
                textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                position: "relative",
                zIndex: 25,
              }}
            >
              Pacsys: Tecnologia que Transforma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto"
              style={{
                color: "#e5e7eb",
                textShadow: "1px 1px 6px rgba(0,0,0,0.8)",
                position: "relative",
                zIndex: 25,
              }}
            >
              Desenvolvemos sistemas inteligentes que automatizam processos,
              otimizam resultados e mantêm sua empresa segura.
            </motion.p>
          </div>

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
      </div>

      {/* Setas Customizadas (z-30) */}
      <button
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 text-white hover:opacity-80 transition-opacity z-30"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
        onClick={() => sliderRef.current?.slickPrev()}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 text-white hover:opacity-80 transition-opacity z-30"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
        onClick={() => sliderRef.current?.slickNext()}
        aria-label="Próximo slide"
      >
        <ChevronRight size={48} />
      </button>

      {/* Gradiente no bottom - CORRIGIDO */}
      <div className="absolute inset-x-0 bottom-0 h-32 w-full bg-linear-to-t from-background to-transparent z-40 pointer-events-none" />
    </section>
  );
}