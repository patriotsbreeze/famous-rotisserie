import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Heart, Clock, Star, MapPin } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Heart size={32} className="text-amber-600" />,
      title: 'Flavorful Chicken',
      description: 'Spice and seasonings are tasted throughout our chicken, not just on the outside.'
    },
    {
      icon: <Award size={32} className="text-amber-600" />,
      title: 'Quality Ingredients',
      description: 'Everything is made fresh in-house with no preservatives or emulsifiers.'
    },
    {
      icon: <Clock size={32} className="text-amber-600" />,
      title: 'Fresh Daily',
      description: 'All food is prepared fresh daily with locally sourced ingredients when possible.'
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: 'Care and Craft',
      description: 'It\'s care and craft you can taste in every bite, served with real plates and silverware.'
    }
  ];

  const chickenVarieties = [
    {
      name: 'Traditional Hand-Breaded',
      description: 'Classic breaded chicken with our signature seasoning'
    },
    {
      name: 'Citrus Grilled',
      description: 'Fresh citrus-marinated grilled chicken'
    },
    {
      name: 'Extra Crispy',
      description: 'Coming soon - our new extra crispy option'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Founded',
      description: 'Famous Rotisserie & Grill opens its first location, becoming a local culinary institution.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded to multiple locations in New York and Maryland.'
    },
    {
      year: '2020',
      title: 'Delivery Focus',
      description: 'Enhanced delivery services to put a new spin on food delivery.'
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Continuing to serve fresh, flavorful food with authentic Mexican rostisado style cooking.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>About Us - Famous Rotisserie & Grill</title>
        <meta name="description" content="Learn about Famous Rotisserie & Grill's commitment to fresh, locally-sourced ingredients and traditional Mexican rostisado cooking since 2010." />
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
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2010, Famous Rotisserie & Grill has been a local culinary institution in New York and Maryland, 
              putting a new spin on delivery with fresh, locally-sourced ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                A Local <span className="text-gradient">Institution</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Famous Rotisserie & Grill is the destination of choice for people looking for great 
                fast food restaurants in Valley Stream, NY and Silver Spring, MD. Whether you're looking 
                for great fast food or a friendly atmosphere, Famous Rotisserie & Grill has it all.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From the moment you walk in our doors you'll be greeted by our gracious, accommodating 
                staff and assured the perfect dining experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the very beginning, we've always had an appreciation for flavorful chicken to feed 
                our friends and families. We're not your typical chicken restaurant.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
                <div className="text-6xl mb-6">🍗</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Our Chicken Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Famous Rotisserie & Grill, spice and seasonings are tasted throughout our chicken, 
                  not just on the outside. We offer a variety of chicken recipes to satisfy every palate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-gradient">Special</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, freshness, and authentic flavors sets us apart from the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover"
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

      {/* Chicken Varieties Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Our Chicken <span className="text-gradient">Varieties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a variety of chicken recipes to satisfy every taste preference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chickenVarieties.map((variety, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-4xl mb-4">🍗</div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  {variety.name}
                </h3>
                <p className="text-gray-600">
                  {variety.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a beloved local institution.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-200 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Serving Our <span className="text-gradient">Communities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve the communities of New York and Maryland with fresh, delicious food.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={32} className="text-amber-600" />
                <h3 className="text-2xl font-playfair font-bold text-gray-900">New York</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Valley Stream</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Queens</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={32} className="text-amber-600" />
                <h3 className="text-2xl font-playfair font-bold text-gray-900">Maryland</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Silver Spring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Wheaton</span>
                </div>
              </div>
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
              Experience the Difference
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Visit any of our locations to taste the care and craft in every bite. 
              Quality meals at fast food prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/locations"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find a Location
              </a>
              <a
                href="/menu"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 