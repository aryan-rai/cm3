import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, Star, Clock, BarChart3, Check, ShoppingCart, Music, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { getProductById } from '../stripe-config';

const PianoNoteDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTab, setSelectedTab] = useState('overview');
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Piano notes data (in a real app, this would come from an API or database)
  const pianoNotesData = {
    'chorale-piano-notes': {
      id: 'chorale-piano-notes',
      title: 'Chorale Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Beginner',
      price: 15,
      originalPrice: 20,
      rating: 4.8,
      reviews: 24,
      duration: '10 minutes',
      pages: 4,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Master the art of chorale harmonization with these comprehensive piano arrangements and exercises.',
      longDescription: 'This collection focuses on the fundamental principles of chorale writing and harmonization. Students will learn four-part harmony, voice leading, and the stylistic elements that make chorales so effective in both sacred and secular contexts.',
      features: [
        'Four-part harmony exercises',
        'Step-by-step video tutorial',
        'Voice leading techniques',
        'Bach-style progressions',
        'Harmonic analysis',
        'Practice exercises'
      ],
      whatYouLearn: [
        'Four-part harmony principles',
        'Voice leading techniques',
        'Chorale harmonization',
        'Bach chorale style',
        'Harmonic progression analysis'
      ],
      requirements: [
        'Basic note reading ability',
        'Understanding of major and minor scales',
        'Basic chord knowledge',
        'Ability to read both clefs simultaneously'
      ],
      includes: [
        'High-quality PDF sheet music (4 pages)',
        '20-minute instructional video',
        'Harmony exercises PDF',
        'Voice leading examples',
        'Analysis worksheets'
      ]
    },
    'etude-piano-notes': {
      id: 'etude-piano-notes',
      title: 'Etude Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 5.99,
      originalPrice: 28,
      rating: 4.9,
      reviews: 32,
      duration: '12 minutes',
      pages: 6,
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Technical studies designed to improve your piano technique with challenging and musical exercises.',
      longDescription: 'These etudes combine technical development with musical expression. Each study focuses on specific technical challenges while maintaining musical interest and artistic value.',
      features: [
        'Technical development exercises',
        'Finger independence training',
        'Scale and arpeggio patterns',
        'Performance technique tips',
        'Progressive difficulty levels',
        'Musical expression guidance'
      ],
      whatYouLearn: [
        'Advanced finger technique',
        'Hand independence',
        'Scale mastery',
        'Arpeggio fluency',
        'Technical musicality'
      ],
      requirements: [
        'Intermediate piano level',
        'Basic scale knowledge',
        'Finger independence',
        'Regular practice routine',
        'Technical foundation'
      ],
      includes: [
        'Etude collection (6 pages)',
        '30-minute technique video',
        'Practice method guide',
        'Technical exercises',
        'Performance tips'
      ]
    },
    'canon-in-d-wedding': {
      id: 'canon-in-d-wedding',
      title: 'Canon in D - Wedding Arrangement',
      composer: 'Johann Pachelbel',
      difficulty: 'Intermediate',
      price: 18,
      originalPrice: 28,
      rating: 4.7,
      reviews: 31,
      duration: '10 minutes',
      pages: 5,
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/NlprozGcs80',
      description: 'Perfect for weddings and special occasions, this beautiful arrangement of Canon in D is accessible yet elegant. Specially arranged for solo piano performance.',
      longDescription: 'Pachelbel\'s Canon in D is a wedding favorite, and this solo piano arrangement captures all the beauty of the original while being practical for ceremony performance. The arrangement includes multiple variations to suit different parts of the wedding ceremony.',
      features: [
        'Wedding-optimized arrangement',
        'Performance tips video',
        'Chord progressions explained',
        'Tempo variations included',
        'Multiple arrangement options',
        'Ceremony timing guidance'
      ],
      whatYouLearn: [
        'Baroque style interpretation',
        'Chord progression mastery',
        'Variation techniques',
        'Performance under pressure',
        'Ceremony music timing'
      ],
      requirements: [
        'Intermediate piano skills',
        'Comfort with chord progressions',
        'Basic baroque style knowledge',
        'Experience with performance pieces',
        'Good rhythm and timing'
      ],
      includes: [
        'Wedding arrangement sheet music (5 pages)',
        '30-minute tutorial video',
        'Ceremony timing guide',
        'Chord chart reference',
        'Performance tips document'
      ]
    },
    'chopin-minute-waltz': {
      id: 'chopin-minute-waltz',
      title: 'Minute Waltz Op. 64 No. 1',
      composer: 'Frédéric Chopin',
      difficulty: 'Advanced',
      price: 25,
      originalPrice: 35,
      rating: 4.9,
      reviews: 12,
      duration: '15 minutes',
      pages: 8,
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/OpIQNxiKJoE',
      description: 'Challenge yourself with Chopin\'s famous Minute Waltz, complete with advanced technique guidance. Master this virtuosic showpiece with professional instruction.',
      longDescription: 'The Minute Waltz is one of Chopin\'s most technically demanding and musically rewarding pieces. Despite its nickname, it typically takes longer than a minute to perform properly. This comprehensive package breaks down every technical challenge.',
      features: [
        'Original Chopin score',
        'Advanced technique breakdown',
        'Performance interpretation guide',
        'Practice strategies for speed',
        'Detailed fingering analysis',
        'Historical performance notes'
      ],
      whatYouLearn: [
        'Advanced waltz rhythm techniques',
        'Rapid passage work',
        'Chopin\'s unique harmonic language',
        'Virtuosic performance skills',
        'Romantic period interpretation'
      ],
      requirements: [
        'Advanced piano technique',
        'Previous Chopin experience',
        'Solid scales and arpeggios',
        'Good hand independence',
        'Performance experience recommended'
      ],
      includes: [
        'Complete Urtext score (8 pages)',
        '45-minute masterclass video',
        'Technical exercise collection',
        'Performance analysis',
        'Historical context document'
      ]
    },
    'amazing-grace-hymn': {
      id: 'amazing-grace-hymn',
      title: 'Amazing Grace - Piano Hymn',
      composer: 'Traditional',
      difficulty: 'Beginner',
      price: 12,
      originalPrice: 20,
      rating: 4.6,
      reviews: 28,
      duration: '6 minutes',
      pages: 3,
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/CDdvReNKKuk',
      description: 'A beautiful, simple arrangement of the beloved hymn Amazing Grace, perfect for beginners. Learn to play this timeless spiritual with proper hymn-playing techniques.',
      longDescription: 'Amazing Grace is one of the most beloved hymns in the Christian tradition. This arrangement is designed for beginning pianists who want to learn proper hymn-playing techniques while enjoying this beautiful melody.',
      features: [
        'Simple chord progression',
        'Multiple arrangement options',
        'Hymn playing techniques',
        'Spiritual context included',
        'Easy fingering patterns',
        'Congregational accompaniment tips'
      ],
      whatYouLearn: [
        'Basic hymn accompaniment',
        'Simple chord progressions',
        'Spiritual music interpretation',
        'Congregational playing techniques',
        'Traditional harmony principles'
      ],
      requirements: [
        'Basic note reading',
        'Simple chord knowledge helpful',
        'Beginner to early intermediate level',
        'Interest in spiritual music',
        'Basic rhythm understanding'
      ],
      includes: [
        'Simple arrangement sheet music (3 pages)',
        '20-minute tutorial video',
        'Chord chart reference',
        'Hymn playing guide',
        'Spiritual context notes'
      ]
    },
    'river-flows-in-you': {
      id: 'river-flows-in-you',
      title: 'River Flows in You',
      composer: 'Yiruma',
      difficulty: 'Intermediate',
      price: 22,
      originalPrice: 32,
      rating: 4.8,
      reviews: 35,
      duration: '11 minutes',
      pages: 5,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/7maJOI3QMu0',
      description: 'Learn this popular contemporary piece by Yiruma, known for its beautiful melody and emotional expression. Perfect for developing contemporary piano style.',
      longDescription: 'River Flows in You is one of the most popular contemporary piano pieces, beloved for its flowing melody and emotional depth. This Korean composer\'s masterpiece has touched millions of hearts worldwide.',
      features: [
        'Contemporary piano style',
        'Emotional expression techniques',
        'Pedaling instructions',
        'Modern performance tips',
        'Stylistic interpretation guide',
        'Contemporary harmony analysis'
      ],
      whatYouLearn: [
        'Contemporary piano techniques',
        'Emotional expression in music',
        'Modern pedaling techniques',
        'Flowing melodic lines',
        'Contemporary harmony understanding'
      ],
      requirements: [
        'Intermediate piano skills',
        'Good pedaling technique',
        'Experience with contemporary music',
        'Emotional musical expression',
        'Solid rhythm and timing'
      ],
      includes: [
        'Official arrangement (5 pages)',
        '30-minute style tutorial',
        'Emotional expression guide',
        'Pedaling technique video',
        'Contemporary style notes'
      ]
    }
  };

  const currentNote = pianoNotesData[id as keyof typeof pianoNotesData];

  useEffect(() => {
    if (currentNote) {
      document.title = `${currentNote.title} - Piano Notes | Clynton Music`;
    }
  }, [currentNote]);

  if (!currentNote) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-navy-950 mb-4">Piano Note Not Found</h1>
          <p className="text-gray-600 mb-8">The piano note you're looking for doesn't exist.</p>
          <Link 
            to="/piano-notes" 
            className="px-6 py-3 bg-navy-800 text-white rounded-md hover:bg-navy-900 transition-colors"
          >
            Back to Piano Notes
          </Link>
        </div>
      </div>
    );
  }

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

    const product = getProductById(currentNote.id);
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
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-navy-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-navy-800">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/piano-notes" className="text-gray-600 hover:text-navy-800">Piano Notes</Link>
            <span className="text-gray-400">/</span>
            <span className="text-navy-800">{currentNote.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/piano-notes" 
          className="inline-flex items-center space-x-2 text-navy-800 hover:text-navy-900 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Piano Notes</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Media */}
          <div>
            <div className="relative mb-6">
              <img 
                src={currentNote.image} 
                alt={`${currentNote.title} sheet music`}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentNote.difficulty)}`}>
                  {currentNote.difficulty}
                </span>
              </div>
              {currentNote.originalPrice > currentNote.price && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>
              )}
            </div>

            {/* Video Preview */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-medium text-navy-900 mb-3 flex items-center">
                <Play className="mr-2 text-gold-500" size={20} />
                Video Preview
              </h3>
              <div className="aspect-video">
                <iframe
                  src={currentNote.videoPreview}
                  title={`${currentNote.title} tutorial preview`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <h1 className="text-3xl font-serif font-bold text-navy-950 mb-2">{currentNote.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {currentNote.composer}</p>

            {/* Rating and Stats */}
            <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">{currentNote.rating}</span>
                <span>({currentNote.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-5 h-5" />
                <span>{currentNote.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Music className="w-5 h-5" />
                <span>{currentNote.pages} pages</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl font-bold text-navy-950">S${currentNote.price}</span>
              {currentNote.originalPrice > currentNote.price && (
                <span className="text-2xl text-gray-500 line-through">S${currentNote.originalPrice}</span>
              )}
              {currentNote.originalPrice > currentNote.price && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save S${currentNote.originalPrice - currentNote.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{currentNote.description}</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Purchase Button */}
            <div className="bg-gold-50 p-6 rounded-lg mb-8">
              <button
                onClick={handlePurchase}
                disabled={loading}
                className="w-full bg-gold-400 hover:bg-gold-500 disabled:bg-gray-300 text-navy-950 font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    <span>{isAuthenticated ? 'Purchase & Download Now' : 'Login to Purchase'}</span>
                  </>
                )}
              </button>
              <div className="text-center text-sm text-gray-600">
                <p>✓ Instant download after purchase</p>
                <p>✓ 30-day money-back guarantee</p>
                <p>✓ Lifetime access to materials</p>
                <p className="mt-2 text-xs text-gray-500">
                  Secure payment via Stripe • All major cards accepted
                </p>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4">
              {currentNote.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'learn', label: 'What You\'ll Learn' },
                { id: 'requirements', label: 'Requirements' },
                { id: 'includes', label: 'What\'s Included' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-gold-400 text-gold-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'overview' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">{currentNote.longDescription}</p>
              </div>
            )}

            {selectedTab === 'learn' && (
              <div>
                <h3 className="text-xl font-medium text-navy-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {currentNote.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'requirements' && (
              <div>
                <h3 className="text-xl font-medium text-navy-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {currentNote.requirements.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'includes' && (
              <div>
                <h3 className="text-xl font-medium text-navy-900 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {currentNote.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Download className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-navy-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Ready to Master This Piece?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get instant access to professional sheet music, detailed video tutorials, and practice materials. Start playing {currentNote.title} today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handlePurchase}
              disabled={loading}
              className="px-8 py-4 bg-gold-400 hover:bg-gold-500 disabled:bg-gray-300 text-navy-950 font-bold rounded-lg transition-colors flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Purchase Now - S${currentNote.price}</span>
              )}
            </button>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium rounded-lg transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoNoteDetailPage;