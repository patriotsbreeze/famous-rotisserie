import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Star, Clock, ArrowRight, Filter, Truck, Phone } from 'lucide-react';
import DoorDashLogo from '../components/DoorDashLogo';
import UberEatsLogo from '../components/UberEatsLogo';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'chicken', name: 'Chicken Dishes', icon: '🍗' },
    { id: 'seafood', name: 'Seafood', icon: '🦐' },
    { id: 'sides', name: 'Side Dishes', icon: '🍟' },
    { id: 'combos', name: 'Combos', icon: '🍱' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = [
    // Chicken Dishes
    {
      id: 1,
      name: 'Pepper Chicken',
      description: 'Our signature pepper chicken with bold, flavorful seasoning throughout',
      category: 'chicken',
      popular: true,
      image: process.env.PUBLIC_URL + '/images/product_pepper_chicken.jpg',
      spicy: false
    },
    {
      id: 2,
      name: 'Blacken Chicken',
      description: 'Cajun-style blackened chicken with authentic spices and herbs',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Blacken_chicken.jpg',
      spicy: false
    },
    {
      id: 3,
      name: 'Orange Chicken',
      description: 'Sweet and tangy orange chicken with citrus glaze',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Orange_chicken.jpg',
      spicy: false
    },
    {
      id: 4,
      name: 'Signature Bourbon Chicken',
      description: 'Our famous bourbon chicken with rich, smoky flavor',
      category: 'chicken',
      popular: true,
      image: process.env.PUBLIC_URL + '/images/product_Signature_bourbon_chicken.jpg',
      spicy: false
    },
    {
      id: 5,
      name: 'Famous Teriyaki Chicken',
      description: 'Traditional teriyaki chicken with sweet soy glaze',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Famous_teriyaki_chicken.jpg',
      spicy: false
    },
    {
      id: 6,
      name: 'Curry Chicken',
      description: 'Aromatic curry chicken with authentic Indian spices',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_curry_chicken.jpg',
      spicy: false
    },
    {
      id: 7,
      name: 'Spicy BBQ Chicken',
      description: 'Tangy BBQ chicken with a spicy kick',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Spicy_BBQ_chicken.jpg',
      spicy: true
    },
    {
      id: 8,
      name: 'Honey Chopped Spare Ribs',
      description: 'Tender spare ribs with honey glaze',
      category: 'chicken',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Honey_chopped_spare_ribs.jpg',
      spicy: false
    },
    // Seafood
    {
      id: 9,
      name: 'Hot and Spicy Shrimp',
      description: 'Spicy shrimp with bold seasoning and heat',
      category: 'seafood',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Hot_and_spicy_shrimp.jpg',
      spicy: true
    },
    {
      id: 10,
      name: 'Grilled Salmon',
      description: 'Fresh grilled salmon with herbs and lemon',
      category: 'seafood',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_grilled_salmon.jpg',
      spicy: false
    },
    // Combos
    {
      id: 11,
      name: 'Chicken and Shrimp Combo',
      description: 'Perfect combination of our chicken and shrimp',
      category: 'combos',
      popular: true,
      image: process.env.PUBLIC_URL + '/images/product_Chicken_and_Shrimp_combo.jpg',
      spicy: false
    },
    {
      id: 12,
      name: 'Chicken and Shrimp Teriyaki',
      description: 'Teriyaki chicken and shrimp combo',
      category: 'combos',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Chicken_and_shrimp_teriyaki.jpg',
      spicy: false
    },
    // Side Dishes
    {
      id: 13,
      name: 'Yellow Rice',
      description: 'Flavorful yellow rice with aromatic spices',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Yellow_rice.jpg',
      spicy: false
    },
    {
      id: 14,
      name: 'Steamed Green Beans',
      description: 'Fresh steamed green beans with seasoning',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Steamed_green_bean.jpg',
      spicy: false
    },
    {
      id: 15,
      name: 'Mac and Cheese',
      description: 'Creamy mac and cheese made fresh daily',
      category: 'sides',
      popular: true,
      image: process.env.PUBLIC_URL + '/images/product_Mac_and_cheese.jpg',
      spicy: false
    },
    {
      id: 16,
      name: 'Sweet Corn',
      description: 'Sweet corn on the cob with butter',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Sweet_corn.jpg',
      spicy: false
    },
    {
      id: 17,
      name: 'Mashed Potatoes',
      description: 'Creamy mashed potatoes with gravy',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_mashed_potatoes.jpg',
      spicy: false
    },
    {
      id: 18,
      name: 'Broccoli',
      description: 'Fresh steamed broccoli with seasoning',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Broccoli.jpg',
      spicy: false
    },
    {
      id: 19,
      name: 'Fried Sweet Plantains',
      description: 'Sweet fried plantains with caramelized edges',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Fried_sweet_plantains.jpg',
      spicy: false
    },
    {
      id: 20,
      name: 'Vegetable Noodles',
      description: 'Stir-fried vegetable noodles with fresh vegetables',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Vegetable_noodles.jpg',
      spicy: false
    },
    {
      id: 21,
      name: 'Cajun Potatoes',
      description: 'Spicy Cajun-style potatoes with bold seasoning',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Cajun_potatoes.jpg',
      spicy: false
    },
    {
      id: 22,
      name: 'Steamed Mix Vegetables',
      description: 'Fresh steamed mixed vegetables with seasoning',
      category: 'sides',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Steamed_mix_vegetables.jpg',
      spicy: false
    },
    // Desserts
    {
      id: 23,
      name: 'New York Cheese Cake',
      description: 'Classic New York style cheesecake',
      category: 'desserts',
      popular: true,
      image: process.env.PUBLIC_URL + '/images/product_New_York_cheese_cake.jpg',
      spicy: false
    },
    {
      id: 24,
      name: 'Red Velvet Cake',
      description: 'Rich red velvet cake with cream cheese frosting',
      category: 'desserts',
      popular: false,
      image: process.env.PUBLIC_URL + '/images/product_Red_velvet_cake.jpg',
      spicy: false
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Menu - Famous Rotisserie & Grill</title>
        <meta name="description" content="Explore our fresh menu featuring Mexican rostisado style chicken, seafood, sides, and desserts. All made fresh daily with locally-sourced ingredients." />
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
              Our <span className="text-gradient">Menu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything on our menu is made from scratch and on-site each and every day. 
              Fresh, locally-sourced ingredients assembled in unique ways to deliver absolutely delicious food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Explore Our Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our signature chicken dishes to fresh seafood, delicious sides, and sweet desserts, 
              every item is prepared with care and authentic flavors.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="relative mb-6">
                    <img src={item.image} alt={item.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
                    {item.popular && (
                      <span className="absolute top-0 right-0 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={12} />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-playfair font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      {item.spicy && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Spicy
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed h-12">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Fresh Daily</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
              All our food is made fresh daily with no preservatives or emulsifiers. 
              Quality meals at fast food prices!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/locations"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Truck size={20} />
                Order Online
              </Link>
              <a
                href="tel:516-872-8888"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call to Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu; 