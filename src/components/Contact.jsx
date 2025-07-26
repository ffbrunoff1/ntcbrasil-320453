import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      text: '+55 44 99104-0774',
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      text: 'contato@ntcbrasil.com',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      text: 'Maringá, Paraná, Brasil',
    },
  ];
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulação de envio de formulário
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tem um projeto em mente? Entre em contato conosco. Nossa equipe está
            pronta para ajudar a transformar sua visão em realidade.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-text-dark">
              Informações de Contato
            </h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <span className="text-lg text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sua Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center justify-center bg-primary text-secondary font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-primary-dark hover:scale-105 transform shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
