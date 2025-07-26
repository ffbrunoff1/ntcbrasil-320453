import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Award } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: 'Inovação em Construção',
      description:
        'Utilizamos as mais recentes tecnologias e métodos construtivos para garantir eficiência e qualidade superior em cada projeto.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Equipe Especializada',
      description:
        'Nossa equipe é composta por profissionais altamente qualificados e dedicados, prontos para superar as expectativas dos clientes.',
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: 'Compromisso com a Qualidade',
      description:
        'A excelência é o nosso padrão. Entregamos obras duradouras, seguras e com acabamento impecável, do início ao fim.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Com anos de experiência no setor da construção, a NTC Brasil se
            orgulha de construir mais do que edifícios: construímos
            relacionamentos duradouros baseados na confiança, integridade e
            resultados excepcionais.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
