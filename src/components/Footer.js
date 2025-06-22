import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Locations', path: '/locations' },
      { name: 'Catering', path: '/catering' },
      { name: 'Franchising', path: '/franchising' },
      { name: 'Careers', path: '/careers' }
    ],
    services: [
      { name: 'Menu', path: '/menu' },
      { name: 'Delivery', path: '/locations' },
      { name: 'Takeout', path: '/contact' },
      { name: 'Catering', path: '/catering' },
      { name: 'Special Offers', path: '/offers' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/contact' },
      { name: 'Order Status', path: '/contact' },
      { name: 'Feedback', path: '/contact' },
      { name: 'Help Center', path: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/famousrotisserie/' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/famousrotisserie/' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
                Famous Rotisserie & Grill
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fresh Mexican rostisado style chicken and delicious comfort food. 
                Made fresh daily with locally-sourced ingredients since 2010.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3 text-amber-500" />
                  <span>New York & Maryland</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3 text-amber-500" />
                  <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3 text-amber-500" />
                  <a href="mailto:info@famousrotisserie.com" className="hover:text-amber-400 transition-colors">
                    info@famousrotisserie.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Hours & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Service Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span className="mr-2">Order on DoorDash</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Famous Rotisserie & Grill. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                Accessibility
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 