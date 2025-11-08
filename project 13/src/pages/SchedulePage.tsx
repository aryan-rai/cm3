import React, { useEffect } from 'react';
import { Calendar, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    document.title = "Schedule Free Piano Lesson Demo - Piano Lessons Singapore | Clynton Music";
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Schedule Your Free Piano Lesson Demo Singapore</h1>
          <p className="text-gray-300 max-w-2xl">
            Take the first step in your piano journey. Schedule a complimentary 30-minute piano demo lesson to experience our personalized piano teaching approach and discuss your musical goals with professional piano instructor Clynton Loh in Singapore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gold-400/20 p-4 rounded-full">
                <Calendar className="w-12 h-12 text-gold-500" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Book Your Complimentary Piano Demo Lesson</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose a convenient time for your personalized piano demo lesson. We'll discuss your piano goals, 
              assess your current level, and create a customized piano learning plan just for you. Available for both piano and cello lessons in Singapore.
            </p>
          </div>

          {/* What to Expect Section */}
          <div className="bg-navy-50 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-medium text-navy-900 mb-6 flex items-center">
              <CalendarCheck className="mr-2 text-gold-500" size={24} />
              What to Expect in Your Piano Demo Lesson
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-navy-800 mb-2">Piano Assessment & Discussion</h4>
                <p className="text-gray-600 text-sm">We'll talk about your piano background, goals, and preferences to create a personalized piano learning plan tailored to your needs.</p>
              </div>
              <div>
                <h4 className="font-medium text-navy-800 mb-2">Hands-On Piano Experience</h4>
                <p className="text-gray-600 text-sm">Get a feel for our piano teaching style with a mini-lesson tailored to your skill level, whether you're a complete piano beginner or have some experience.</p>
              </div>
              <div>
                <h4 className="font-medium text-navy-800 mb-2">Piano Q&A Session</h4>
                <p className="text-gray-600 text-sm">Ask any questions about piano lessons, practice expectations, our piano teaching approach, and lesson packages.</p>
              </div>
              <div>
                <h4 className="font-medium text-navy-800 mb-2">Piano Next Steps Planning</h4>
                <p className="text-gray-600 text-sm">If you decide to continue piano lessons, we'll schedule your regular lessons and discuss the best piano lesson package for your goals.</p>
              </div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-navy-900 text-white p-4 text-center">
              <h3 className="text-lg font-medium">Select Your Preferred Piano Lesson Time</h3>
              <p className="text-gray-300 text-sm">Choose from available slots for your free piano demo lesson in Singapore</p>
            </div>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/clyntonmusic1/30min?primary_color=ffed00" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-navy-900 mb-3">Piano Demo Lesson Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Duration:</strong> 30 minutes</li>
                <li>• <strong>Cost:</strong> Completely FREE</li>
                <li>• <strong>Location:</strong> BLK 20B LORONG 3 GEYLANG, Singapore 383020</li>
                <li>• <strong>Instruments:</strong> Piano and Cello lessons available</li>
                <li>• <strong>Age Groups:</strong> Children (5+) and Adults welcome for piano lessons</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link 
                  to="/services" 
                  className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                  aria-label="Learn more about our piano lesson packages in Singapore"
                >
                  View Piano Lesson Packages & Pricing →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-navy-900 mb-3">Need Help with Piano Lesson Booking?</h3>
              <p className="text-gray-600 mb-3">
                Having trouble scheduling or have questions about the piano demo lesson? We're here to help!
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">📞</span> 
                  <a href="tel:+6586132683" className="hover:text-gold-600">+6586132683</a>
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">✉️</span> 
                  <a href="mailto:clyntonmusic@gmail.com" className="hover:text-gold-600">clyntonmusic@gmail.com</a>
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                  aria-label="Contact us for piano lesson information"
                >
                  Contact Us for Piano Info →
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-12 bg-gold-50 rounded-lg p-8">
            <h3 className="text-xl font-medium text-navy-900 mb-4 text-center">Why Choose Clynton Music for Piano Lessons?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gold-400/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold-600 font-bold">1</span>
                </div>
                <h4 className="font-medium text-navy-800 mb-2">Professional Piano Instructor</h4>
                <p className="text-gray-600 text-sm">Learn piano from Clynton Loh, professionally trained at LASALLE College of the Arts with extensive piano performance experience.</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold-600 font-bold">2</span>
                </div>
                <h4 className="font-medium text-navy-800 mb-2">Personalized Piano Learning</h4>
                <p className="text-gray-600 text-sm">Every piano lesson is tailored to your specific goals, learning style, and musical interests.</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold-600 font-bold">3</span>
                </div>
                <h4 className="font-medium text-navy-800 mb-2">Proven Piano Results</h4>
                <p className="text-gray-600 text-sm">Our piano students consistently achieve their musical goals and develop a lifelong love for piano music.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;