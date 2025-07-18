import React from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Authentic Recipes' },
    { number: '20+', label: 'Expert Chefs' }
  ];

  const team = [
    {
      name: 'Chef Ahmed Benali',
      role: 'Executive Chef',
      image: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Master chef with 20+ years of experience in authentic Moroccan cuisine'
    },
    {
      name: 'Fatima El Mansouri',
      role: 'Sous Chef',
      image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Specialist in traditional tagines and pastries from Fez'
    },
    {
      name: 'Omar Chakir',
      role: 'Head Pastry Chef',
      image: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in Moroccan sweets and traditional desserts'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: 'Authentic Hospitality',
      description: 'We treat every guest like family, offering warm Moroccan hospitality that makes you feel at home.'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Quality Excellence',
      description: 'We source the finest ingredients and maintain the highest standards in everything we do.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Cultural Heritage',
      description: 'We preserve and share the rich culinary traditions of Morocco with every dish we serve.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        {/* Black Layer between background and text */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg font-medium">
            A journey of passion, tradition, and authentic Moroccan cuisine that began over 15 years ago
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dar Lkebir was born from a dream to bring the authentic flavors of Morocco to our community. Founded by the Benali family, our restaurant has been serving traditional Moroccan cuisine for over 15 years.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our recipes have been passed down through generations, originating from the vibrant markets of Marrakech and the coastal cities of Casablanca. Every dish tells a story of our heritage and passion for authentic flavors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to honor these traditions while creating new memories for our guests, one meal at a time.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Traditional Moroccan Cooking"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Est. 2009</p>
                    <p className="text-sm opacity-90">15+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented chefs who bring authentic Moroccan flavors to your table
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To create an unforgettable dining experience that celebrates the rich culinary heritage of Morocco, 
            bringing families and friends together through authentic flavors, warm hospitality, and cultural exchange.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;