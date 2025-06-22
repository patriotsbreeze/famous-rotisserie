import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Star, Phone, Mail, Clock, Award } from 'lucide-react';

const Catering = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cateringServices = [
    {
      icon: <Users size={32} className="text-amber-600" />,
      title: 'Corporate Parties',
      description: 'Professional catering for corporate events and business meetings.'
    },
    {
      icon: <Calendar size={32} className="text-amber-600" />,
      title: 'Wedding Receptions',
      description: 'Make your special day memorable with our delicious catering.'
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: 'Birthday Celebrations',
      description: 'Perfect for birthday parties and family celebrations.'
    },
    {
      icon: <Award size={32} className="text-amber-600" />,
      title: 'Backyard Barbecues',
      description: 'Bring the BBQ experience to your outdoor gatherings.'
    }
  ];

  const cateringPackages = [
    {
      name: 'Group of 20',
      description: 'Perfect for small gatherings and intimate events',
      includes: ['Choose one entrée and two sides'],
      price: '$16.99 per person'
    },
    {
      name: 'Group of 21 to 40',
      description: 'Ideal for medium-sized events and celebrations',
      includes: ['Choose two entrées and three sides'],
      price: '$16.99 per person'
    },
    {
      name: 'Group of 41 to 60',
      description: 'Great for larger events and corporate functions',
      includes: ['Choose three entrées and four sides'],
      price: '$16.99 per person'
    },
    {
      name: 'Group of 61 and up',
      description: 'Perfect for large events and celebrations',
      includes: ['Choose four entrées and five sides'],
      price: '$16.99 per person'
    }
  ];

  const addOns = [
    {
      name: 'Cheese Cake',
      price: '$3.49 per slice',
      description: 'Add delicious cheesecake to your catering order'
    },
    {
      name: 'Chocolate Cake',
      price: '$3.49 per slice',
      description: 'Rich chocolate cake for dessert lovers'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Catering - Famous Rotisserie & Grill</title>
        <meta name="description" content="Professional catering services from Famous Rotisserie & Grill. Corporate events, wedding receptions, birthdays, and backyard barbecues with fresh Mexican rostisado style chicken." />
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
              Professional <span className="text-gradient">Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Famous Rotisserie & Grill's event catering services will make any event in the area memorable. 
              Our staff of professionals will ensure your guests enjoy the best BBQ meals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Perfect for Any <span className="text-gradient">Event</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Famous Rotisserie & Grill Catering is great for Corporate Parties, Wedding Receptions, 
              Birthdays, Backyard Barbecues and more!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cateringServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl card-hover"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Catering <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We look forward to the pleasure of serving you and your guests the best BBQ chicken 
              at your upcoming event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cateringPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-3xl font-bold text-amber-600">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Package Includes:</h4>
                  {pkg.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Dessert <span className="text-gradient">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your catering order with our delicious dessert options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">🍰</div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                  {addon.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {addon.description}
                </p>
                <div className="text-2xl font-bold text-amber-600">
                  {addon.price}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 p-6 bg-red-50 rounded-2xl max-w-2xl mx-auto"
          >
            <p className="text-gray-700 font-semibold">
              <span className="text-red-600">Note:</span> Salmon and shrimp are not part of the catering entrées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to make your event unforgettable? Contact us today to discuss your catering needs 
                and let us create a custom menu that your guests will love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get a Catering Quote
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white text-amber-600 p-8 rounded-2xl">
                <div className="text-6xl mb-6">🍗</div>
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  Best BBQ Chicken
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We look forward to the pleasure of serving you and your guests 
                  the best BBQ chicken at your upcoming event.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering; 