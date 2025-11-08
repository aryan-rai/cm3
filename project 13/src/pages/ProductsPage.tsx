import React, { useEffect } from 'react';
import { stripeProducts } from '../stripe-config';
import ProductCard from '../components/ProductCard';
import { Music, ShoppingBag } from 'lucide-react';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Products - Clynton Music | Piano Lessons Singapore";
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-gold-400" />
            <h1 className="text-4xl font-serif font-bold">Our Products</h1>
          </div>
          <p className="text-gray-300 max-w-2xl">
            Discover our premium music products and services designed to enhance your musical journey.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Available Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose from our carefully curated selection of music products and services.
            </p>
          </div>

          {stripeProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stripeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No Products Available</h3>
              <p className="text-gray-500">Check back soon for new products and services.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Need Help Choosing?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Not sure which product is right for you? Contact us for personalized recommendations based on your musical goals and experience level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-md transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/schedule"
              className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;