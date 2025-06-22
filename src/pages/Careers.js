import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Users, Star, Clock, Award, Mail, Phone, MapPin, ChefHat } from 'lucide-react';

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobPositions = [
    {
      title: 'Grill Person',
      department: 'Kitchen',
      location: 'All Locations',
      type: 'Full-time/Part-time',
      description: 'The GRILL PERSON is responsible for the preparation of food items from the American kitchen. The grill person is also responsible for maintaining the quality standards of the products he/she prepares.',
      requirements: [
        'Minimum 16 years of age or older',
        'Ability to be self-reliant. Execute assigned duties and responsibility from upper management staff',
        'Must adhere to Famous Rotisserie & Grill uniform and grooming policy',
        'Excellent oral communication skills to effectively communicate with management, corporate staff, restaurant employees, and customers'
      ],
      benefits: [
        'Team-oriented work environment',
        'Fast paced and fun atmosphere',
        'Significant opportunities for growth and career advancement',
        'Work environment that is team-oriented, fast paced and fun'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Users size={32} className="text-amber-600" />,
      title: 'Team-Oriented',
      description: 'We foster a collaborative environment where everyone works together to deliver exceptional service.'
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: 'Quality Focus',
      description: 'We maintain high standards in everything we do, from food preparation to customer service.'
    },
    {
      icon: <Clock size={32} className="text-amber-600" />,
      title: 'Fast-Paced',
      description: 'Our dynamic environment keeps you engaged and motivated throughout your shift.'
    },
    {
      icon: <Award size={32} className="text-amber-600" />,
      title: 'Career Growth',
      description: 'We offer significant opportunities for growth and career advancement for motivated individuals.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Careers - Famous Rotisserie & Grill</title>
        <meta name="description" content="Join the Famous Rotisserie & Grill team. We're looking for enthusiastic, self-motivated leaders to join our team in a fast-paced, fun environment." />
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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Famous Rotisserie & Grill offers significant opportunities for growth and career advancement. 
              We offer a work environment that is team-oriented, fast paced and fun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are currently looking for enthusiastic, self-motivated leaders to join our team. 
              Our work environment is team-oriented, fast paced and fun.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl card-hover"
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for passionate individuals who share our commitment to quality and customer service.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <ChefHat size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Job Description:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Why Work With <span className="text-gradient">Us</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Famous Rotisserie & Grill, we believe in creating an environment where 
                our team members can thrive and grow both personally and professionally.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Growth Opportunities:</strong> Significant opportunities for growth and career advancement
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Team Environment:</strong> Work in a team-oriented, fast paced and fun atmosphere
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Quality Focus:</strong> Be part of a team that maintains high standards in food and service
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Leadership Development:</strong> We're looking for self-motivated leaders to join our team
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8"
            >
              <div className="text-6xl mb-6 text-center">👥</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4 text-center">
                Join Our Family
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We're not just looking for employees - we're looking for team members who 
                want to be part of something special. Join our family and help us continue 
                to deliver exceptional food and service to our communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                If you're enthusiastic, self-motivated, and ready to be part of a dynamic team, 
                we'd love to hear from you. Contact us to learn more about current opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={24} className="mr-3" />
                  <span className="text-lg">Call us: (516) 872-8888</span>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="mr-3" />
                  <span className="text-lg">Email: famousrotisserie@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={24} className="mr-3" />
                  <span className="text-lg">Locations in NY and MD</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white text-amber-600 p-8 rounded-2xl">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  Apply Today
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Don't miss the opportunity to be part of our growing team. 
                  We're looking for passionate individuals who want to make a difference.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 