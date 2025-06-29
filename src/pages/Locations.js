import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Truck, Star } from 'lucide-react';
import DoorDashLogo from '../components/DoorDashLogo';
import UberEatsLogo from '../components/UberEatsLogo';

const Locations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const locations = [
    {
      state: 'New York',
      areas: [
        {
          name: 'Green Acres Mall',
          address: '2034 Green Acres Mall, Valley Stream, NY 11581',
          floor: 'Floor 2',
          phone: '(516) 872-8888',
          hours: 'Mon-Sat: 11am-9pm, Sun: 11am-7pm',
          doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grill-valley-stream-1238290/1810671/',
          uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/tJIpd_xcSiqVXbHi3s4xRw?utm_source=wok'
        },
        {
          name: 'Queens Center',
          address: '90-15 Queens Blvd, Elmhurst, NY 11373',
          floor: 'Floor 1',
          phone: '(929) 463-3990',
          hours: 'Mon-Sat: 10am-9pm, Sun: 11am-8pm',
          doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grill-valley-stream-1238290/1810671/',
          uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/up40GtpkV_K4--emHO4xlA?diningMode=DELIVERY&sc=SEARCH_SUGGESTION'
        },
        {
          name: 'Jackson Heights',
          address: '95-51 Roosevelt Ave, Jackson Heights, NY 11372',
          floor: '',
          phone: '(347) 527-2851',
          hours: 'Mon-Sun: 11am-9:30pm',
          doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-and-grill-jackson-heights-25048455/23184577/?event_type=autocomplete&pickup=false',
          uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/up40GtpkV_K4--emHO4xlA?surfaceName='
        }
      ],
      image: '🗽'
    },
    {
      state: 'Maryland',
      areas: [
        {
          name: 'Westfield Wheaton',
          address: '11160 Veirs Mill Rd, Wheaton, MD 20902',
          floor: 'Floor 2',
          phone: '(301) 933-4078',
          hours: 'Mon-Thurs: 10am-8pm, Fri-Sat: 10am-9pm, Sun: 11am-7pm',
          doorDashUrl: 'https://www.doordash.com/store/famous-rotisserie-&-grille-silver-spring-1780195/2229309/?event_type=autocomplete&pickup=false',
          uberEatsUrl: 'https://www.ubereats.com/store/famous-rotisserie-and-grill/PLLelB8nRUKuQaKBwuxu-g?diningMode=DELIVERY&surfaceName='
        }
      ],
      image: '🏛️'
    }
  ];

  const deliveryInfo = [
    {
      icon: <Truck size={32} className="text-amber-600" />,
      title: 'Fast Delivery',
      description: 'Quick delivery to your door with our reliable delivery partners.'
    },
    {
      icon: <Clock size={32} className="text-amber-600" />,
      title: 'Fresh Daily',
      description: 'All food prepared fresh daily with no preservatives or emulsifiers.'
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: 'Quality Guaranteed',
      description: 'Quality meals at fast food prices with our Mexican rostisado style.'
    }
  ];

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // slight delay to ensure rendering
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Locations - Famous Rotisserie & Grill</title>
        <meta name="description" content="Find Famous Rotisserie & Grill locations in New York and Maryland. Fast delivery and fresh Mexican rostisado style chicken." />
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
              Our <span className="text-gradient">Locations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Serving fresh, delicious food in New York and Maryland with fast delivery 
              and our signature Mexican rostisado style chicken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
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
              Find Us Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our locations to experience our fresh, flavorful food 
              and warm, friendly atmosphere.
            </p>
          </motion.div>

          <div className="space-y-16">
            {locations.map((location, locationIndex) => (
              <motion.div
                key={location.state}
                id={location.state === 'New York' ? 'new-york' : location.state === 'Maryland' ? 'maryland' : undefined}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: locationIndex * 0.2 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12"
              >
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{location.image}</div>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                    {location.state}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {location.areas.map((area, areaIndex) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, x: areaIndex % 2 === 0 ? -30 : 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: (locationIndex * 0.2) + (areaIndex * 0.1) }}
                      className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h4 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                            {area.name}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {area.description}
                          </p>
                        </div>
                        <div className="text-3xl">📍</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <MapPin size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                          <div>
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(area.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-gray-900 hover:text-amber-600"
                            >
                              {area.address}
                            </a>
                            {area.floor && <p className="text-gray-500 text-sm">{area.floor}</p>}
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                          <div>
                             <p className="font-semibold text-gray-900">Phone</p>
                            <a href={`tel:${area.phone}`} className="text-gray-600 hover:text-amber-600">{area.phone}</a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Hours</p>
                            <p className="text-gray-600 text-sm">{area.hours}</p>
                          </div>
                        </div>
                      </div>

                      {area.name === 'Queens Center' ? null : (
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={area.doorDashUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <DoorDashLogo />
                            <span className="font-semibold text-gray-900">Order DoorDash</span>
                          </a>
                          <a
                            href={area.uberEatsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <UberEatsLogo />
                            <span className="font-semibold text-gray-900">Order UberEats</span>
                          </a>
                        </div>
                      )}
                       <a
                          href={`tel:${area.phone}`}
                          className="mt-3 bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                        >
                          Call to Order
                        </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Fast <span className="text-gradient">Delivery</span> Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get our fresh, delicious food delivered right to your door. 
              Quality meals at fast food prices!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover"
              >
                <div className="mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations; 