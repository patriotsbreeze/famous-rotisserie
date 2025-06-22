import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Star, Clock, MapPin, Phone, ArrowRight, ChevronDown, Truck, Leaf, ChefHat, Award, Heart } from 'lucide-react';
import DoorDashLogo from '../components/DoorDashLogo';
import UberEatsLogo from '../components/UberEatsLogo';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Heart size={32} className="text-amber-600" />,
      title: 'Fresh Ingredients',
      description: 'No preservatives or emulsifiers - everything is made fresh in-house'
    },
    {
      icon: <Clock size={32} className="text-amber-600" />,
      title: 'Made Daily',
      description: 'Everything on our menu is made from scratch and on-site each and every day'
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: 'Mexican Style',
      description: 'Our chicken is cooked in the Mexican "rostisado" style with special marinade'
    },
    {
      icon: <Truck size={32} className="text-amber-600" />,
      title: 'Fast Delivery',
      description: 'Quality meals at fast food prices with quick delivery to your door'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Famous Rotisserie & Grill - Fresh Mexican Style Chicken</title>
        <meta name="description" content="Famous Rotisserie & Grill - Fresh Mexican 'rostisado' style chicken in New York and Maryland. Delivery and takeout with fresh, locally-sourced ingredients since 2010." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10 text-center pt-16 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gray-900 mb-6">
              Welcome to <span className="text-gradient">Famous Rotisserie</span> & Grill
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Located in New York and Maryland, Famous Rotisserie & Grill has been a local 
              culinary institution since 2010. Our mission is to put a new spin on delivery.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We do this by taking nothing but the freshest ingredients and assembling them 
              in unique ways to deliver absolutely delicious food to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-amber-600 text-white hover:bg-amber-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                View Our Menu
                <ArrowRight size={20} />
              </a>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{ minWidth: '220px', minHeight: '80px' }}
                >
                  <DoorDashLogo />
                  <span className="font-semibold text-gray-900">Order DoorDash</span>
                </a>
                <a
                  href="https://www.ubereats.com/store/famous-rotisserie-and-grill/tJIpd_xcSiqVXbHi3s4xRw?utm_source=wok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{ minWidth: '220px', minHeight: '80px' }}
                >
                  <UberEatsLogo />
                  <span className="font-semibold text-gray-900">Order UberEats</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Famous Rotisserie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not your typical chicken restaurant. At Famous Rotisserie & Grill, 
              spice and seasonings are tasted throughout our chicken, not just on the outside.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl card-hover"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Fresh Food for <span className="text-gradient">Everyone</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're stopping by our Famous Rotisserie & Grill for a lunch or dinner 
                out with friends, you'll find the menu at Famous Rotisserie & Grill offers 
                something for everyone and every occasion.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Burgers, sandwiches, salads and other comfort food favorites are all thoughtfully 
                prepared with fresh, unique ingredients that redefine classic American cuisine.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Everything on our menu is made from scratch and on-site each and every day. 
                Whenever possible and in season, locally sourced produce and ingredients are used.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
                <div className="text-6xl mb-6">🍗</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Mexican Rostisado Style
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our chicken is cooked in the Mexican "rostisado" style. With our special marinade 
                  and multi-hour cooking process, the chicken we serve is tender and juicy with a 
                  prominent citrus flavor profile.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The end result is a quality meal at a fast food price.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Visit Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us in New York and Maryland, serving fresh, delicious food with warm hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🗽</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">New York</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Valley Stream</div>
                  <div>Elmhurst</div>
                  <div>Jackson Heights</div>
                  <div>Brooklyn</div>
                </div>
                <a
                  href="/locations"
                  className="mt-6 inline-block bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View NY Locations
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Maryland</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Wheaton</div>
                </div>
                <a
                  href="/locations"
                  className="mt-6 inline-block bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View MD Locations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Order fresh, delicious food delivered to your door or visit us in person. 
              Quality meals at fast food prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <DoorDashLogo />
                <span className="font-semibold text-gray-900">Order DoorDash</span>
              </a>
              <a
                href="https://www.ubereats.com/store/famous-rotisserie-and-grill/tJIpd_xcSiqVXbHi3s4xRw?utm_source=wok"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <UberEatsLogo />
                <span className="font-semibold text-gray-900">Order UberEats</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 