'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Target, number: '500+', label: 'Successful Projects' },
    { icon: Award, number: '10+', label: 'Years of Excellence' },
    { icon: TrendingUp, number: '98%', label: 'Client Retention Rate' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends to deliver cutting-edge solutions.',
    },
    {
      title: 'Quality',
      description: 'Every project meets the highest standards of excellence and performance.',
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust and mutual success.',
    },
    {
      title: 'Results',
      description: 'Our focus is on delivering measurable outcomes that drive business growth.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
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
            About <span className="text-[#f9ba01]">Intelliteq</span>
          </h2>
          <p className="text-lg text-[#F8F9FA]/70 max-w-3xl mx-auto">
            We are a team of passionate technology experts dedicated to transforming businesses 
            through innovative digital solutions and strategic consulting.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#f9ba01] to-[#f9ba01]/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-[#0A0F1C]" />
                </div>
                <div className="text-3xl font-bold text-[#f9ba01] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#F8F9FA]/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#F8F9FA] mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-[#F8F9FA]/70 leading-relaxed">
              <p>
                Founded in 2014, Intelliteq emerged from a vision to bridge the gap between 
                cutting-edge technology and practical business solutions. Our journey began with 
                a small team of passionate developers and has grown into a comprehensive technology 
                consulting firm.
              </p>
              <p>
                Today, we work with businesses of all sizes, from startups to Fortune 500 companies, 
                helping them navigate the digital landscape and achieve their technological goals. 
                Our expertise spans across multiple domains, ensuring we can provide holistic 
                solutions that drive real business value.
              </p>
              <p>
                What sets us apart is our commitment to understanding each client's unique challenges 
                and crafting tailored solutions that not only meet current needs but also position 
                them for future growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#F8F9FA] mb-6">
              Our Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-[#f9ba01]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-[#f9ba01] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-[#F8F9FA]/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team CTA */}
        <motion.div
          className="text-center mt-20 p-12 rounded-2xl bg-gradient-to-br from-[#f9ba01]/10 to-transparent border border-[#f9ba01]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#F8F9FA] mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-[#F8F9FA]/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help accelerate your business goals 
            and drive meaningful digital transformation.
          </p>
          <motion.button
            className="bg-gradient-to-r from-[#f9ba01] to-[#f9ba01]/80 text-[#0A0F1C] font-semibold px-8 py-4 rounded-xl hover:from-[#f9ba01]/90 hover:to-[#f9ba01]/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;