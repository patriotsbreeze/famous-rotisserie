import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Star, Clock, ArrowRight, Filter } from 'lucide-react';

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
      price: 12.99,
      category: 'chicken',
      popular: true,
      image: '🍗',
      spicy: false,
      vegetarian: false
    },
    {
      id: 2,
      name: 'Blacken Chicken',
      description: 'Cajun-style blackened chicken with authentic spices and herbs',
      price: 13.99,
      category: 'chicken',
      popular: false,
      image: '🍗',
      spicy: true,
      vegetarian: false
    },
    {
      id: 3,
      name: 'Orange Chicken',
      description: 'Sweet and tangy orange chicken with citrus glaze',
      price: 12.99,
      category: 'chicken',
      popular: false,
      image: '🍗',
      spicy: false,
      vegetarian: false
    },
    {
      id: 4,
      name: 'Signature Bourbon Chicken',
      description: 'Our famous bourbon chicken with rich, smoky flavor',
      price: 13.99,
      category: 'chicken',
      popular: true,
      image: '🍗',
      spicy: false,
      vegetarian: false
    },
    {
      id: 5,
      name: 'Famous Teriyaki Chicken',
      description: 'Traditional teriyaki chicken with sweet soy glaze',
      price: 12.99,
      category: 'chicken',
      popular: false,
      image: '🍗',
      spicy: false,
      vegetarian: false
    },
    {
      id: 6,
      name: 'Curry Chicken',
      description: 'Aromatic curry chicken with authentic Indian spices',
      price: 12.99,
      category: 'chicken',
      popular: false,
      image: '🍗',
      spicy: true,
      vegetarian: false
    },
    {
      id: 7,
      name: 'Spicy BBQ Chicken',
      description: 'Tangy BBQ chicken with a spicy kick',
      price: 13.99,
      category: 'chicken',
      popular: false,
      image: '🍗',
      spicy: true,
      vegetarian: false
    },
    {
      id: 8,
      name: 'Honey Chopped Spare Ribs',
      description: 'Tender spare ribs with honey glaze',
      price: 14.99,
      category: 'chicken',
      popular: false,
      image: '🍖',
      spicy: false,
      vegetarian: false
    },
    // Seafood
    {
      id: 9,
      name: 'Hot and Spicy Shrimp',
      description: 'Spicy shrimp with bold seasoning and heat',
      price: 15.99,
      category: 'seafood',
      popular: false,
      image: '🦐',
      spicy: true,
      vegetarian: false
    },
    {
      id: 10,
      name: 'Grilled Salmon',
      description: 'Fresh grilled salmon with herbs and lemon',
      price: 16.99,
      category: 'seafood',
      popular: false,
      image: '🐟',
      spicy: false,
      vegetarian: false
    },
    // Combos
    {
      id: 11,
      name: 'Chicken and Shrimp Combo',
      description: 'Perfect combination of our chicken and shrimp',
      price: 18.99,
      category: 'combos',
      popular: true,
      image: '🍱',
      spicy: false,
      vegetarian: false
    },
    {
      id: 12,
      name: 'Chicken and Shrimp Teriyaki',
      description: 'Teriyaki chicken and shrimp combo',
      price: 19.99,
      category: 'combos',
      popular: false,
      image: '🍱',
      spicy: false,
      vegetarian: false
    },
    // Side Dishes
    {
      id: 13,
      name: 'Yellow Rice',
      description: 'Flavorful yellow rice with aromatic spices',
      price: 3.99,
      category: 'sides',
      popular: false,
      image: '🍚',
      spicy: false,
      vegetarian: true
    },
    {
      id: 14,
      name: 'Steamed Green Beans',
      description: 'Fresh steamed green beans with seasoning',
      price: 3.99,
      category: 'sides',
      popular: false,
      image: '🥬',
      spicy: false,
      vegetarian: true
    },
    {
      id: 15,
      name: 'Mac and Cheese',
      description: 'Creamy mac and cheese made fresh daily',
      price: 4.99,
      category: 'sides',
      popular: true,
      image: '🧀',
      spicy: false,
      vegetarian: true
    },
    {
      id: 16,
      name: 'Sweet Corn',
      description: 'Sweet corn on the cob with butter',
      price: 3.99,
      category: 'sides',
      popular: false,
      image: '🌽',
      spicy: false,
      vegetarian: true
    },
    {
      id: 17,
      name: 'Mashed Potatoes',
      description: 'Creamy mashed potatoes with gravy',
      price: 4.99,
      category: 'sides',
      popular: false,
      image: '🥔',
      spicy: false,
      vegetarian: true
    },
    {
      id: 18,
      name: 'Broccoli',
      description: 'Fresh steamed broccoli with seasoning',
      price: 3.99,
      category: 'sides',
      popular: false,
      image: '🥦',
      spicy: false,
      vegetarian: true
    },
    {
      id: 19,
      name: 'Fried Sweet Plantains',
      description: 'Sweet fried plantains with caramelized edges',
      price: 4.99,
      category: 'sides',
      popular: false,
      image: '🍌',
      spicy: false,
      vegetarian: true
    },
    {
      id: 20,
      name: 'Vegetable Noodles',
      description: 'Stir-fried vegetable noodles with fresh vegetables',
      price: 5.99,
      category: 'sides',
      popular: false,
      image: '🍜',
      spicy: false,
      vegetarian: true
    },
    {
      id: 21,
      name: 'Cajun Potatoes',
      description: 'Spicy Cajun-style potatoes with bold seasoning',
      price: 4.99,
      category: 'sides',
      popular: false,
      image: '🥔',
      spicy: true,
      vegetarian: true
    },
    {
      id: 22,
      name: 'Steamed Mix Vegetables',
      description: 'Fresh steamed mixed vegetables with seasoning',
      price: 3.99,
      category: 'sides',
      popular: false,
      image: '🥬',
      spicy: false,
      vegetarian: true
    },
    // Desserts
    {
      id: 23,
      name: 'New York Cheese Cake',
      description: 'Classic New York style cheesecake',
      price: 5.99,
      category: 'desserts',
      popular: true,
      image: '🍰',
      spicy: false,
      vegetarian: true
    },
    {
      id: 24,
      name: 'Red Velvet Cake',
      description: 'Rich red velvet cake with cream cheese frosting',
      price: 5.99,
      category: 'desserts',
      popular: false,
      image: '🍰',
      spicy: false,
      vegetarian: true
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex items-center gap-2">
                      {item.popular && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                          <Star size={12} />
                          Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Spicy
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Vegetarian
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ${item.price}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>Fresh Daily</span>
                    </div>
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
              <a
                href="https://www.doordash.com/store/famous-rotisserie---grill-valley-stream-1238290/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Order on DoorDash
                <ArrowRight size={20} />
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

export default Menu; 