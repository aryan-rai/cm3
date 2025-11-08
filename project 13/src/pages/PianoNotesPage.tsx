import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Music, Play, Download, BarChart3 } from 'lucide-react';
import PianoNoteCard from '../components/PianoNoteCard';

const PianoNotesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Piano Notes & Sheet Music for Sale - Singapore | Clynton Music";
  }, []);

  const pianoNotes = [
    {
      id: 'chorale-piano-notes',
      title: 'Chorale Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Beginner',
      price: 15,
      originalPrice: 20,
      rating: 4.8,
      reviews: 24,
      duration: '10 minutes',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Master the art of chorale harmonization with these comprehensive piano arrangements and exercises.',
      features: [
        'Four-part harmony exercises',
        'Step-by-step video tutorial',
        'Voice leading techniques',
        'Bach-style progressions'
      ]
    },
    {
      id: 'etude-piano-notes',
      title: 'Etude Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 20,
      originalPrice: 28,
      rating: 4.9,
      reviews: 32,
      duration: '12 minutes',
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Technical studies designed to improve your piano technique with challenging and musical exercises.',
      features: [
        'Technical development exercises',
        'Finger independence training',
        'Scale and arpeggio patterns',
        'Performance technique tips'
      ]
    },
    {
      id: 'fantasie-piano-notes',
      title: 'Fantasie Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 18,
      originalPrice: 25,
      rating: 4.7,
      reviews: 28,
      duration: '14 minutes',
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Explore the imaginative world of fantasy pieces with these expressive and creative piano compositions.',
      features: [
        'Creative improvisation techniques',
        'Fantasy form structures',
        'Expressive interpretation',
        'Romantic period styling'
      ]
    },
    {
      id: 'leider-ohne-worter-piano-notes',
      title: 'Leider Ohne Worter denken kann',
      composer: 'Clynton Music',
      difficulty: 'Advanced',
      price: 25,
      originalPrice: 32,
      rating: 4.8,
      reviews: 19,
      duration: '15 minutes',
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Songs without words that speak through melody - expressive piano pieces that convey deep emotions.',
      features: [
        'Melodic expression techniques',
        'Emotional interpretation',
        'Lyrical phrasing methods',
        'Advanced pedaling'
      ]
    },
    {
      id: 'nocturne-piano-notes',
      title: 'Nocturne Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Beginner',
      price: 12,
      originalPrice: 18,
      rating: 4.6,
      reviews: 35,
      duration: '8 minutes',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Beautiful night music pieces that capture the essence of evening tranquility and romantic expression.',
      features: [
        'Night music atmosphere',
        'Romantic expression',
        'Gentle melodic lines',
        'Peaceful harmonies'
      ]
    },
    {
      id: 'synthetic-scales-piano-notes',
      title: 'Synthetic Scales Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 22,
      originalPrice: 30,
      rating: 4.7,
      reviews: 22,
      duration: '11 minutes',
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Explore modern synthetic scales and their applications in contemporary piano composition and improvisation.',
      features: [
        'Modern scale systems',
        'Contemporary harmony',
        'Improvisation techniques',
        'Compositional applications'
      ]
    },
    {
      id: 'loh-serialism-piano-notes',
      title: 'Loh Serialism Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Advanced',
      price: 28,
      originalPrice: 38,
      rating: 4.9,
      reviews: 15,
      duration: '18 minutes',
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Advanced twelve-tone technique compositions showcasing modern serialist approaches to piano music.',
      features: [
        'Twelve-tone technique',
        'Serial composition methods',
        'Modern analytical approach',
        'Advanced harmonic concepts'
      ]
    },
    {
      id: 'pop-piano-notes',
      title: 'Pop Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Beginner',
      price: 16,
      originalPrice: 22,
      rating: 4.5,
      reviews: 42,
      duration: '9 minutes',
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Contemporary pop arrangements for piano featuring popular melodies and modern chord progressions.',
      features: [
        'Popular chord progressions',
        'Contemporary styling',
        'Modern rhythmic patterns',
        'Pop performance techniques'
      ]
    },
    {
      id: 'indian-piano-notes',
      title: 'Indian Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 24,
      originalPrice: 32,
      rating: 4.8,
      reviews: 26,
      duration: '13 minutes',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Traditional Indian melodies and ragas adapted for piano with authentic ornamentations and scales.',
      features: [
        'Traditional raga systems',
        'Indian ornamentation',
        'Cultural authenticity',
        'Melodic improvisation'
      ]
    },
    {
      id: 'chinese-piano-notes',
      title: 'Chinese Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Intermediate',
      price: 21,
      originalPrice: 28,
      rating: 4.7,
      reviews: 31,
      duration: '12 minutes',
      image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Beautiful Chinese folk melodies and traditional pieces arranged for piano with cultural authenticity.',
      features: [
        'Traditional Chinese melodies',
        'Folk song arrangements',
        'Pentatonic scales',
        'Cultural interpretation'
      ]
    },
    {
      id: 'neo-baroque-piano-notes',
      title: 'Neo-baroque Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Advanced',
      price: 26,
      originalPrice: 35,
      rating: 4.8,
      reviews: 18,
      duration: '16 minutes',
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Modern interpretations of baroque style featuring contemporary harmonies with classical structures.',
      features: [
        'Baroque form structures',
        'Modern harmonic language',
        'Counterpoint techniques',
        'Contemporary interpretation'
      ]
    },
    {
      id: 'x-golden-piano-notes',
      title: 'X-Golden Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Advanced',
      price: 35,
      originalPrice: 45,
      rating: 5.0,
      reviews: 12,
      duration: '20 minutes',
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Exclusive golden collection of premium piano compositions with advanced techniques and expressions.',
      features: [
        'Premium compositions',
        'Advanced techniques',
        'Exclusive arrangements',
        'Master-level content'
      ]
    },
    {
      id: 'soda-pop-piano-notes',
      title: 'Soda Pop Piano Notes',
      composer: 'Clynton Music',
      difficulty: 'Beginner',
      price: 14,
      originalPrice: 20,
      rating: 4.4,
      reviews: 38,
      duration: '7 minutes',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Fun and bubbly piano pieces with a modern twist, perfect for contemporary performance and enjoyment.',
      features: [
        'Fun and playful style',
        'Modern arrangements',
        'Easy-to-learn pieces',
        'Contemporary appeal'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Music className="w-8 h-8 text-gold-400" />
            <h1 className="text-4xl font-serif font-bold">Piano Notes & Sheet Music</h1>
          </div>
          <p className="text-gray-300 max-w-2xl">
            Discover our collection of professionally arranged piano sheet music with video tutorials. Perfect for students of all levels looking to expand their repertoire.
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Why Choose Our Piano Notes?</h2>
            <p className="text-gray-700">
              Each piece comes with professional arrangements, detailed video tutorials, and practice guidance from experienced piano instructor Clynton Loh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Play className="w-10 h-10 text-gold-500" />,
                title: "Video Tutorials",
                description: "Every piece includes a detailed video tutorial showing proper technique and interpretation."
              },
              {
                icon: <Download className="w-10 h-10 text-gold-500" />,
                title: "Instant Download",
                description: "Get immediate access to high-quality PDF sheet music and video content after purchase."
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-gold-500" />,
                title: "All Skill Levels",
                description: "From beginner-friendly arrangements to advanced masterpieces, we have music for every level."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-medium text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piano Notes Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Piano Sheet Music Collection</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Browse our carefully curated selection of piano pieces, each with professional arrangements and comprehensive learning materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pianoNotes.map((note) => (
              <PianoNoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Need Personal Piano Guidance?</h2>
          <p className="text-navy-900 max-w-2xl mx-auto mb-8">
            While our piano notes are perfect for self-study, nothing beats personalized instruction. Book a lesson with Clynton to accelerate your piano learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/schedule" 
              className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Schedule Piano Lesson
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent hover:bg-navy-900/10 border-2 border-navy-900 text-navy-900 font-medium rounded-md transition-all duration-300"
            >
              Contact for Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PianoNotesPage;