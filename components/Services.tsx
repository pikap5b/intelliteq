'use client';

import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Smartphone, BarChart3, Cog } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS & Azure', 'DevOps Integration', 'Cost Optimization'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Risk Assessment', 'Security Audits', '24/7 Monitoring'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Native Development', 'App Store Deployment'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Business Intelligence', 'Machine Learning', 'Data Visualization'],
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to accelerate your digital transformation.',
      features: ['Digital Strategy', 'System Integration', 'Process Automation'],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F9FA] mb-6">
            Our <span className="text-[#f9ba01]">Services</span>
          </h2>
          <p className="text-lg text-[#F8F9FA]/70 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your business and drive innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:border-[#f9ba01]/30">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f9ba01]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 mb-6 bg-gradient-to-br from-[#f9ba01] to-[#f9ba01]/80 rounded-xl flex items-center justify-center"
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <IconComponent className="w-8 h-8 text-[#0A0F1C]" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#F8F9FA] mb-4 group-hover:text-[#f9ba01] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#F8F9FA]/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-[#F8F9FA]/60"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0.6,
                            x: hoveredCard === index ? 0 : -10,
                          }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#f9ba01] rounded-full mr-3"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;