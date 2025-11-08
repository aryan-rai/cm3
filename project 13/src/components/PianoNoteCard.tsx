import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Music, Loader2, ShoppingCart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { getProductById } from '../stripe-config';

interface PianoNote {
  id: string;
  title: string;
  composer: string;
  difficulty: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  description: string;
}

interface PianoNoteCardProps {
  note: PianoNote;
}

const PianoNoteCard: React.FC<PianoNoteCardProps> = ({ note }) => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handlePurchase = async () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    const product = getProductById(note.id);
    if (!product) {
      setError('Product not found');
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
      <div className="relative">
        <img 
          src={note.image} 
          alt={`${note.title} piano sheet music`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
            {note.difficulty}
          </span>
        </div>
        {note.originalPrice > note.price && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Sale
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-navy-950 mb-1">{note.title}</h3>
        <p className="text-gray-600 text-sm mb-3">by {note.composer}</p>
        
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{note.rating}</span>
            <span>({note.reviews})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{note.duration}</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{note.description}</p>
        
        {error && (
          <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-md">
            <p className="text-xs text-red-800">{error}</p>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-navy-950">S${note.price}</span>
            {note.originalPrice > note.price && (
              <span className="text-lg text-gray-500 line-through">S${note.originalPrice}</span>
            )}
          </div>
          <div className="flex space-x-2">
            <Link 
              to={`/piano-notes/${note.id}`}
              className="px-3 py-2 bg-navy-800 hover:bg-navy-900 text-white text-sm font-medium rounded-md transition-colors"
            >
              Details
            </Link>
            <button
              onClick={handlePurchase}
              disabled={loading}
              className="px-3 py-2 bg-gold-400 hover:bg-gold-500 disabled:bg-gray-300 text-navy-950 text-sm font-medium rounded-md transition-colors flex items-center space-x-1"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>...</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3 h-3" />
                  <span>Buy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoNoteCard;