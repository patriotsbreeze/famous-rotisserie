import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Star } from 'lucide-react';
import DoorDashLogo from '../components/DoorDashLogo';
import UberEatsLogo from '../components/UberEatsLogo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Phone size={32} className="text-amber-600" />,
      title: 'Phone',
      details: '(516) 872-8888',
      description: 'Call us to place your order or ask questions'
    },
    {
      icon: <Mail size={32} className="text-amber-600" />,
      title: 'Email',
      details: 'famousrotisserie@aol.com',
      description: 'Send us an email for inquiries and feedback'
    },
    {
      icon: <MapPin size={32} className="text-amber-600" />,
      title: 'Locations',
      details: 'NY & MD',
      description: 'Visit us at any of our locations'
    }
  ];

  const locations = [
    {
      name: 'Green Acres Mall',
      address: '2034 Green Acres Mall, Valley Stream, NY 11581',
      phone: '(516) 872-8888',
      doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grill-valley-stream-1238290/1810671/',
      uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/tJIpd_xcSiqVXbHi3s4xRw?utm_source=wok'
    },
    {
      name: 'Queens Center',
      address: '90-15 Queens Blvd, Elmhurst, NY 11373',
      phone: '(929) 463-3990',
      doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grill-valley-stream-1238290/1810671/',
      uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/up40GtpkV_K4--emHO4xlA?diningMode=DELIVERY&sc=SEARCH_SUGGESTION'
    },
    {
      name: 'Jackson Heights',
      address: '95-51 Roosevelt Ave, Jackson Heights, NY 11372',
      phone: '(347) 527-2851',
      doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-and-grill-jackson-heights-25048455/23184577/?event_type=autocomplete&pickup=false',
      uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/up40GtpkV_K4--emHO4xlA?surfaceName='
    },
    {
      name: 'Westfield Wheaton',
      address: '11160 Veirs Mill Rd, Wheaton, MD 20902',
      phone: '(301) 933-4078',
      doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grille-silver-spring-1780195/2229309/?event_type=autocomplete&pickup=false',
      uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/PLLelB8nRUKuQaKBwuxu-g?diningMode=DELIVERY&surfaceName='
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Contact Us - Famous Rotisserie & Grill</title>
        <meta name="description" content="Contact Famous Rotisserie & Grill. Call (516) 872-8888 or email famousrotisserie@aol.com. Locations in New York and Maryland." />
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our menu, want to place an order, or need catering information? 
              We're here to help! Contact us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
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
              Contact <span className="text-gradient">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us through any of these channels. We're here to serve you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl card-hover"
              >
                <div className="mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-amber-600 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our locations for fresh, delicious Mexican rostisado style chicken.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                  {location.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:text-amber-600"
                      >
                        {location.address}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-gray-600 text-sm hover:text-amber-600">{location.phone}</a>
                    </div>
                  </div>
                </div>

                {location.name === 'Queens Center' ? null : (
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                      href={location.doorDashUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <DoorDashLogo />
                      <span className="font-semibold text-gray-900 text-sm">Order DoorDash</span>
                    </a>
                    <a
                      href={location.uberEatsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <UberEatsLogo />
                      <span className="font-semibold text-gray-900 text-sm">Order UberEats</span>
                    </a>
                  </div>
                )}
                 <a
                    href={`tel:${location.phone}`}
                    className="mt-3 bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                  >
                    Call to Order
                  </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 