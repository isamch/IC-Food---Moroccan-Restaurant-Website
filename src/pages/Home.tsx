import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChefHat, Heart, Award } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8 text-orange-500" />,
      title: 'Authentic Cuisine',
      description: 'Traditional Moroccan recipes passed down through generations'
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: 'Warm Hospitality',
      description: 'Experience genuine Moroccan hospitality in every visit'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in Moroccan cuisine and service'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Dar Lkebir
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Experience the authentic flavors of Morocco in an elegant atmosphere that will transport you to the heart of Marrakech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reserve Your Table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View Our Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dar Lkebir?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring you the finest Moroccan dining experience with authentic flavors, warm hospitality, and elegant ambiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Signature Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved dishes, crafted with authentic Moroccan spices and techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Chicken Tagine',
                description: 'Slow-cooked chicken with preserved lemons and olives',
                price: '$28',
                image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500'
              },
              {
                name: 'Lamb Couscous',
                description: 'Tender lamb with steamed couscous and vegetables',
                price: '$32',
                image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=500'
              },
              {
                name: 'Moroccan Mezze',
                description: 'Traditional assortment of authentic appetizers',
                price: '$18',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Popular</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Info Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Morocco</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Step into Dar Lkebir and be transported to the vibrant souks of Marrakech. Our restaurant combines authentic Moroccan cuisine with an elegant dining atmosphere, featuring traditional décor, warm lighting, and the aromatic scents of North African spices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Open Daily</p>
                    <p className="text-sm text-gray-600">5:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Prime Location</p>
                    <p className="text-sm text-gray-600">Downtown District</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">4.9/5 from 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;