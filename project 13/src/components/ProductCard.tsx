import React, { useState } from 'react';
import { StripeProduct } from '../stripe-config';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

interface ProductCardProps {
  product: StripeProduct;
  onPurchaseSuccess?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchaseSuccess }) => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error('Purchase error:', err);
      setError(err instanceof Error ? err.message : 'Failed to initiate purchase');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-navy-950 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-navy-950">
              {product.currency === 'SGD' ? 'S$' : '$'}{product.price}
            </span>
            <span className="text-sm text-gray-500 uppercase">{product.currency}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.mode === 'subscription' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {product.mode === 'subscription' ? 'Subscription' : 'One-time'}
          </span>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <button
          onClick={handlePurchase}
          disabled={loading}
          className="w-full bg-gold-400 hover:bg-gold-500 disabled:bg-gray-300 text-navy-950 font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>
                {isAuthenticated ? 'Purchase Now' : 'Login to Purchase'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;