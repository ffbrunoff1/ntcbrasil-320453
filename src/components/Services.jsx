import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Home, GanttChartSquare, Wrench } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <HardHat size={40} className="text-secondary" />,
      title: 'Engenharia Civil',
      description:
        'Planejamento e execução de projetos de engenharia complexos, garantindo segurança estrutural e conformidade com as normas técnicas.',
    },
    {
      icon: <Home size={40} className="text-secondary" />,
      title: 'Obras Residenciais',
      description:
        'Construção de residências personalizadas, desde a fundação até o acabamento, transformando o sonho da casa própria em realidade.',
    },
    {
      icon: <GanttChartSquare size={40} className="text-secondary" />,
      title: 'Gerenciamento de Projetos',
      description:
        'Coordenação completa de todas as fases da obra, otimizando prazos, custos e recursos para uma entrega eficiente e tranquila.',
    },
    {
      icon: <Wrench size={40} className="text-secondary" />,
      title: 'Reformas e Renovações',
      description:
        'Modernização e revitalização de espaços, agregando valor ao seu imóvel com soluções criativas e acabamentos de alta qualidade.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Nossas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de construção para atender
            a todas as suas necessidades, com a garantia de qualidade NTC
            Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-primary rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-8 text-secondary">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto p-8 pt-0">
                <a
                  href="#contato"
                  className="inline-block bg-secondary text-primary font-bold py-2 px-6 rounded-full text-base transition-all duration-300 hover:bg-gray-200"
                >
                  Saber Mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
