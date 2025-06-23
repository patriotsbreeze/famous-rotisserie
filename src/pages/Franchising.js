import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Building, MapPin, Users, Award, Mail, Phone, Star, TrendingUp } from 'lucide-react';

const Franchising = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const franchiseBenefits = [
    {
      icon: <Building size={32} className="text-amber-600" />,
      title: 'Proven Concept',
      description: 'Leverage the strength of proven processes and our unique culture to deliver an incredible opportunity.'
    },
    {
      icon: <MapPin size={32} className="text-amber-600" />,
      title: 'Strategic Growth',
      description: 'Our plan for strategic growth is focused close to home, expanding throughout the east coast area in US.'
    },
    {
      icon: <Users size={32} className="text-amber-600" />,
      title: 'Select Partners',
      description: 'We take the same care in choosing franchise partners to help grow the Famous Rotisserie & Grill brand.'
    },
    {
      icon: <Award size={32} className="text-amber-600" />,
      title: 'Quality Standards',
      description: 'Maintain our high standards of quality and service that customers have come to expect.'
    }
  ];

  const idealFranchisee = [
    'Strong business acumen and track record',
    'Established net worth',
    'Passion for developing and operating the proven concept',
    'Commitment to quality and customer service',
    'Ability to follow proven processes and systems'
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Franchising - Famous Rotisserie & Grill</title>
        <meta name="description" content="Join the Famous Rotisserie & Grill family. Franchise opportunities available for qualified partners with strong business acumen and passion for quality food." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Join Our <span className="text-gradient">Family</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We take great care in choosing just the right ingredients for our unique menu selections. 
              We take the same care in choosing franchise partners to help grow the Famous Rotisserie & Grill brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Philosophy</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our philosophy is to leverage the strength of proven processes and our unique culture 
                to deliver an incredible opportunity to select franchisees.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    We focus on strategic growth close to home, with Long Island, NY as our heart and foundation.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Expansion plans target prime markets throughout the east coast area in US.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Quality ingredients and proven processes ensure consistent success.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8"
            >
              <div className="text-6xl mb-6 text-center">🏠</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4 text-center">
                Long Island Roots
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                The original Famous Rotisserie & Grill in Long Island, NY is both geographically 
                and emotionally at the heart of it all. This is where our story began and where 
                we continue to build our foundation for growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Franchise <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a brand that values quality, community, and proven success in the fast-casual dining industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Franchisee Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Ideal <span className="text-gradient">Franchisee</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our ideal franchisee will have a strong business acumen and track record, 
                an established net worth, and a passion for developing and operating the 
                proven Famous Rotisserie & Grill concept.
              </p>
              
              <div className="space-y-4">
                {idealFranchisee.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8"
            >
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4 text-center">
                What We Look For
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We seek partners who share our commitment to quality, customer service, 
                and community involvement. Your success is our success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-lg text-amber-100 mb-8">
                Contact us today to learn more about our franchise opportunities and become part of our success story.
              </p>
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </a>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-amber-200" />
                  <span className="text-amber-100">Email: famousrotisserie@aol.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-amber-200" />
                  <span className="text-amber-100">Contact us for phone inquiries</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-playfair font-bold text-gradient mb-3">
                Start Your Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join a brand that's growing and making a difference in communities across the east coast with quality food and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchising; 