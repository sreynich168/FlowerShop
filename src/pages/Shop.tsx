import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Flower {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  cconst flowers: Flower[] = [
  {
    id: '1',
    name: 'Red Rose',
    price: 45,
    image: '/images/red rose.webp',
    description: 'Classic red roses perfect for romantic occasions',
    category: 'roses',
  },
  {
    id: '2',
    name: 'Tulip Garden Mix',
    price: 32,
    image: '/images/purple tulip.jpg',
    description: 'Colorful tulips bringing spring to your home',
    category: 'tulips',
  },
  {
    id: '3',
    name: 'Sunflower Joy',
    price: 28,
    image: '/images/sunflower Bouquest.png',
    description: 'Bright sunflowers to light up any room',
    category: 'sunflowers',
  },
  {
    id: '4',
    name: 'White Jasmine Elegance',
    price: 38,
    image: '/images/jasmine - Copy.jpg',
    description: 'Elegant white jasmine for sophisticated occasions',
    category: 'lilies', // or rename this to 'jasmines' if you update the category
  },
  {
    id: '5',
    name: 'Pink Rose Delight',
    price: 52,
    image: '/images/pink rose bouquet.jpg',
    description: 'Luxurious pink roses for special celebrations',
    category: 'peonies', // consider changing category to 'roses' or add 'bouquet'
  },
  {
    id: '6',
    name: 'Daisy Charm',
    price: 24,
    image: '/images/daisy.webp',
    description: 'Natural daisies for a rustic charm',
    category: 'mixed', // or create a new category: 'daisies'
  }
];

  const categories = [
    { id: 'all', name: 'All Flowers' },
    { id: 'roses', name: 'Roses' },
    { id: 'tulips', name: 'Tulips' },
    { id: 'sunflowers', name: 'Sunflowers' },
    { id: 'lilies', name: 'Lilies' },
    { id: 'peonies', name: 'Peonies' },
    { id: 'mixed', name: 'Mixed' }
  ];

  const filteredFlowers = selectedCategory === 'all' 
    ? flowers 
    : flowers.filter(flower => flower.category === selectedCategory);

  const handleAddToCart = (flower: Flower) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    addToCart({
      id: flower.id,
      name: flower.name,
      price: flower.price,
      image: flower.image
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Flower Collection
          </h1>
          <p className="text-xl text-gray-600">
            Discover beautiful flowers for every occasion
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Flowers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlowers.map((flower) => (
            <div
              key={flower.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {flower.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {flower.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${flower.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(flower)}
                    className="bg-gradient-to-r from-emerald-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all inline-flex items-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFlowers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No flowers found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;