import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Tag, MapPin, Clock, Download, Star, Percent } from 'lucide-react';

const Offers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentOffers = [
    {
      title: 'Green Acres Mall | 10% OFF',
      location: '2024 Green Acres Mall, Valley Stream, NY 11581',
      description: 'Save 10% on your order at our Green Acres Mall location. Valid for dine-in and takeout orders.',
      discount: '10% OFF',
      validUntil: 'Ongoing',
      terms: [
        'Valid at Green Acres Mall location only',
        'Cannot be combined with other offers',
        'Valid for dine-in and takeout orders',
        'Subject to availability'
      ],
      downloadLink: 'offers/green_acres_10.pdf',
      image: '🏪'
    }
  ];

  const deliveryPartners = [
    {
      name: 'DoorDash',
      description: 'Fast delivery to your door with DoorDash',
      link: 'https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US',
      icon: '🚚'
    },
    {
      name: 'UberEats',
      description: 'Quick delivery with UberEats',
      link: 'https://www.ubereats.com/nyc-suburbs/food-delivery/famous-rotisserie-and-grill/tJIpd_xcSiqVXbHi3s4xRw',
      icon: '🛵'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Offers & Coupons - Famous Rotisserie & Grill</title>
        <meta name="description" content="Save money with our current offers and coupons. 10% OFF at Green Acres Mall location. Fast delivery available through DoorDash and UberEats." />
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
              Special <span className="text-gradient">Offers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Save money on our delicious Mexican rostisado style chicken and fresh menu items. 
              Check out our current offers and delivery options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Offers Section */}
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
              Current <span className="text-gradient">Offers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our special offers and save on your favorite dishes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{offer.image}</div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Percent size={16} />
                    {offer.discount}
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  {offer.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{offer.location}</span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Terms & Conditions:</h4>
                  <ul className="space-y-2">
                    {offer.terms.map((term, termIndex) => (
                      <li key={termIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={offer.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white hover:bg-red-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Download Coupon
                  </a>
                  <a
                    href="tel:+15168728888"
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Call to Order
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Fast <span className="text-gradient">Delivery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get our fresh, delicious food delivered right to your door through our trusted delivery partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">{partner.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Order Now
                    <Tag size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Quality Meals at <span className="text-gradient">Great Prices</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Famous Rotisserie & Grill, we believe that great food should be accessible to everyone. 
                Our quality meals are offered at fast food prices, making it easy to enjoy fresh, 
                delicious Mexican rostisado style chicken without breaking the bank.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Fresh Daily:</strong> All our food is made from scratch and on-site each and every day
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>No Preservatives:</strong> Quality meals with no preservatives or emulsifiers
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Local Ingredients:</strong> Whenever possible and in season, locally sourced produce and ingredients are used
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Fast Delivery:</strong> Quick delivery to your door with our reliable delivery partners
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
              <div className="text-6xl mb-6 text-center">💰</div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4 text-center">
                Great Value
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Quality meals at fast food prices. We put a new spin on delivery by taking nothing 
                but the freshest ingredients and assembling them in unique ways to deliver 
                absolutely delicious food to our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Save?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our coupon and start saving on delicious food today. 
              Don't forget to check our delivery options for fast, convenient service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="offers/green_acres_10.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Coupon
              </a>
              <a
                href="tel:+15168728888"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call to Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers; 