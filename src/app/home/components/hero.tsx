"use client";

import { motion } from "framer-motion";
import { 
  Headset, 
  Globe2, 
  ShieldCheck, 
  FileLock2
} from "lucide-react";

export function Hero() {
  // Configuração dos itens da barra inferior
  const features = [
    {
      icon: Headset,
      title: "Comunicação Ágil 24/7",
      delay: 0.1,
    },
    {
      icon: Globe2,
      title: "Cobertura Nacional & Global",
      delay: 0.2,
    },
    {
      icon: ShieldCheck,
      title: "Seguro & Certificado",
      delay: 0.3,
    },
    {
      icon: FileLock2,
      title: "Proteção Rigorosa de Dados",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* background*/}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/video-dev.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50" // Opacidade ajustada para o bloom sobressair
        />

        {/* bloom*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base escura subtil para garantir leitura */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          <div 
            className="absolute -top-[20%] -right-[10%] w-200 h-200 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse"
            style={{ backgroundColor: 'var(--pacsys-light, #0EA5E9)' }} 
          />
          
          {/* Bloom 2: Luz secundária (Azul Profundo) - Canto Inferior Esquerdo (perto da barra) */}
          <div className="absolute -bottom-[10%] -left-[10%] w-150 h-150 bg-blue-900/40 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
          
          {/* Overlay Gradiente Vertical: Integra o vídeo com o fundo preto da secção seguinte */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" /> */}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Soluções Tecnológicas <br />
            para uma Cadeia <br />
            de Suprimentos Segura
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mb-10 leading-relaxed drop-shadow-lg">
            Gerenciamos os desafios mais complexos de inspeção e tecnologia
            para garantir a segurança do seu negócio.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-pacsys-light text-white px-8 py-4 rounded-full font-medium text-lg shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300"
          >
            Fale Conosco
          </motion.a>
        </motion.div>
      </div>

      {/* 3. BARRA INFERIOR (Classic Transparent Bloom) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Camada de vidro fosco "Ultra Clear" */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-t border-white/10 shadow-[0_-1px_20px_rgba(0,0,0,0.2)]" />
        
        <div className="container relative mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + item.delay }}
                className={`group flex items-center gap-4 py-6 md:py-8 px-4 relative transition-colors duration-300 hover:bg-white/5 ${
                  "justify-start md:justify-center"
                }`}
              >
                <item.icon 
                  size={32} 
                  strokeWidth={1.5}
                  className="text-white/80 group-hover:text-pacsys-light transition-colors duration-300 shrink-0 drop-shadow-lg" 
                />
                <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300 leading-tight drop-shadow-md">
                  {item.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word} {i === 0 && item.title.split(" ").length > 2 ? <br/> : " "}
                      </span>
                  ))}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}