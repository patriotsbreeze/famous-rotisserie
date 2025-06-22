import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Star } from 'lucide-react';

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
      details: 'famousrotisserie@gmail.com',
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
      address: '2024 Green Acres Mall, Valley Stream, NY 11581',
      hours: '10:00am to 9:30pm (Mon to Sat), 10:00am to 7:00pm (Sun)',
      phone: '(516) 872-8888'
    },
    {
      name: 'Queens Center',
      address: '90-15 Queens Blvd, Queens, NY 11373',
      hours: '10:00am to 9:30pm (Mon to Sat), 11:00am to 8:00pm (Sun)',
      phone: '(516) 872-8888'
    },
    {
      name: 'Westfield Wheaton Mall',
      address: '11160 Veirs Mill Rd, Wheaton, MD 20902',
      hours: '10:00am to 9:30pm (Mon to Sat), 11:00am to 7:00pm (Sun)',
      phone: '(516) 872-8888'
    }
  ];

  const deliveryOptions = [
    {
      name: 'DoorDash',
      description: 'Fast delivery to your door',
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

  const faqs = [
    {
      question: 'What are your hours of operation?',
      answer: 'We are open 10:00am to 9:30pm Monday to Saturday, and 10:00am to 7:00pm on Sundays at most locations. Please check specific location hours as they may vary.'
    },
    {
      question: 'Do you offer delivery?',
      answer: 'Yes! We offer delivery through DoorDash and UberEats. You can also call us directly to place delivery orders.'
    },
    {
      question: 'What makes your chicken special?',
      answer: 'Our chicken is cooked in the Mexican "rostisado" style with our special marinade and multi-hour cooking process, making it tender and juicy with a prominent citrus flavor.'
    },
    {
      question: 'Do you use fresh ingredients?',
      answer: 'Yes! Everything on our menu is made from scratch and on-site each and every day. We use locally sourced produce and ingredients whenever possible and in season.'
    },
    {
      question: 'Do you offer catering?',
      answer: 'Yes! We offer professional catering services for corporate parties, wedding receptions, birthdays, backyard barbecues and more. Contact us for more information.'
    },
    {
      question: 'Are you hiring?',
      answer: 'We are currently looking for enthusiastic, self-motivated leaders to join our team. Contact us for current job opportunities.'
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
        <meta name="description" content="Contact Famous Rotisserie & Grill. Call (516) 872-8888 or email famousrotisserie@gmail.com. Locations in New York and Maryland." />
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
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600 text-sm">{location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Order Delivery
                  </a>
                  <a
                    href={`tel:${location.phone}`}
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

      {/* Delivery Options Section */}
      <section className="py-16 bg-white">
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
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-6xl mb-6">{option.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  {option.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Truck size={20} />
                  Order Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our menu, delivery, and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4 flex items-start gap-3">
                    <MessageCircle size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-12">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Ready to Order?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get fresh, delicious Mexican rostisado style chicken delivered to your door 
              or visit us at any of our locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15168728888"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call to Order
              </a>
              <a
                href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Order Delivery
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 