import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <motion.footer
      className="bg-primary text-secondary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#hero">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1752879053548_pm46vapmlyq_Captura_de_Tela_2025-06-27_a_s_19.55.17.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Contato
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-200 transition-colors duration-300">
                contato@ntcbrasil.com
              </li>
              <li className="hover:text-gray-200 transition-colors duration-300">
                +55 44 99104-0774
              </li>
              <li className="hover:text-gray-200 transition-colors duration-300">
                Maringá, Paraná, Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
