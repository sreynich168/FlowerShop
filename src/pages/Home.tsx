import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Truck, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const featuredFlowers = [
    {
      id: '1',
      name: 'Rose Bouquet',
      price: 45,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Tulip Garden',
      price: 32,
      image: 'https://images.pexels.com/photos/1076719/pexels-photo-1076719.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Sunflower Joy',
      price: 28,
      image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-100 via-green-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-pink-500 bg-clip-text text-transparent">
                Welcome to Lunaflora
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the beauty of nature with our carefully curated collection of fresh flowers. 
              Perfect for every occasion, delivered with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-gradient-to-r from-emerald-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/signup"
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all inline-flex items-center justify-center"
              >
                Join Lunaflora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flowers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Flowers</h2>
            <p className="text-xl text-gray-600">Handpicked selections for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFlowers.map((flower) => (
              <div
                key={flower.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{flower.name}</h3>
                  <p className="text-2xl font-bold text-emerald-600 mb-4">${flower.price}</p>
                  <Link
                    to="/shop"
                    className="w-full bg-gradient-to-r from-emerald-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lunaflora?</h2>
            <p className="text-xl text-gray-600">We deliver more than just flowers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fresh & Beautiful</h3>
              <p className="text-gray-600">
                Every flower is hand-selected for freshness and beauty, ensuring your special moments are perfect.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery available in most areas. We ensure your flowers arrive fresh and on time.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                100% satisfaction guaranteed. If you're not happy with your flowers, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;