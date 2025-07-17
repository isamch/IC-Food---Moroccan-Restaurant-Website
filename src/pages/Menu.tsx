import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';
import { Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Dishes' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover authentic Moroccan flavors crafted with traditional recipes and the finest ingredients
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-orange-600 capitalize">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss our exclusive deals and seasonal specials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Weekend Special</h3>
              <p className="text-lg mb-4">
                Enjoy our signature Lamb Tagine with complimentary mint tea on weekends
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">$25</span>
                <span className="text-sm opacity-90">Friday - Sunday</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Family Feast</h3>
              <p className="text-lg mb-4">
                Complete family meal for 4 people including appetizers, mains, and dessert
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">$85</span>
                <span className="text-sm opacity-90">Save $15</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;