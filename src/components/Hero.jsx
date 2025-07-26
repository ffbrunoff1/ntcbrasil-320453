import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-secondary"
      style={{
        backgroundImage:
          "url('https://www.negociossc.com.br/wp-content/uploads/2024/09/Captura-de-tela-2024-09-24-131703.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <motion.div
        className="relative z-10 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Soluções em <span className="text-secondary">drenagem</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-200"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          Construindo o futuro, uma fundação sólida por vez. A NTC Brasil é sua
          parceira de confiança em cada etapa da sua obra.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contato"
            className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform shadow-lg"
          >
            Comece seu projeto hoje!
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#sobre"
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown size={32} className="text-secondary" />
      </motion.a>
    </section>
  );
}
