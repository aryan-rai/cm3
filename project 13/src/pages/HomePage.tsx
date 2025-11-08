import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Music, Play, BookOpen, Award, Music as MusicNote } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Piano Lessons in Singapore | Learn with Clynton Music";
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900 opacity-80"></div>
          <img 
            src="https://static.wixstatic.com/media/0accce_a1930a57c1c34f7a85e092aba099e2c1~mv2.jpg/v1/fill/w_1004,h_575,al_c,q_85,enc_avif,quality_auto/0accce_a1930a57c1c34f7a85e092aba099e2c1~mv2.jpg" 
            alt="Piano teacher in Singapore giving professional piano lessons at Clynton Music studio" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-24">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center space-x-2 text-gold-400 animate-fadeIn">
              <MusicNote size={20} />
              <span className="text-sm uppercase tracking-wider font-medium">Excellence in Music Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-slideUp">
              Private Piano Lessons in Singapore with a Professional Music Teacher
            </h1>
            <p className="text-lg text-gray-300 animate-slideUp animation-delay-100">
              Learn piano near me with expert instruction from Clynton Loh. Our piano lessons for kids and adults in Singapore are tailored to your unique journey. From beginners to advanced musicians, unlock your artistic voice with personalized piano and cello lessons.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-slideUp animation-delay-200">
              <Link 
                to="/schedule" 
                className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
                aria-label="Schedule a free piano lesson demo in Singapore"
              >
                Book Your First Piano Class Today
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-all duration-300"
                aria-label="Explore our piano and cello lesson services in Singapore"
              >
                Explore Piano Lessons
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-32 -left-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Why Choose Clynton Music Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Why Choose Clynton Music for Piano Lessons in Singapore?</h2>
            <p className="text-gray-600">Our approach combines technical excellence with artistic expression, creating a supportive environment for musical growth at every level. Perfect for beginners, kids, and adults looking for quality piano instruction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="w-10 h-10 text-gold-500" />,
                title: "Expert Private Piano Teacher",
                description: "Learn from Clynton Loh, a professionally trained pianist with advanced degrees from LASALLE College of the Arts and extensive performance experience with renowned orchestras in Singapore."
              },
              {
                icon: <BookOpen className="w-10 h-10 text-gold-500" />,
                title: "Personalized Piano Learning Curriculum",
                description: "Every piano lesson is tailored to your specific goals, learning style, and musical interests. Whether you're a complete beginner or advanced player, we adapt our piano teaching to your needs."
              },
              {
                icon: <Award className="w-10 h-10 text-gold-500" />,
                title: "Piano Performance Opportunities",
                description: "Build confidence and showcase your piano progress through regular recitals and concerts. Gain valuable stage experience in a supportive environment with other piano students."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piano Lessons for All Ages Section */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Piano Lessons for All Ages in Singapore</h2>
              <p className="text-gray-700 mb-6">
                Whether you're looking for piano lessons for kids or adult piano classes, our specialized instruction will help you master the piano. With years of experience teaching piano to students of all ages in Singapore, we provide comprehensive guidance that makes learning piano enjoyable and effective.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Piano technique development for beginners to advanced students",
                  "Piano repertoire selection spanning classical to contemporary styles",
                  "Music theory integrated with practical piano application",
                  "Piano performance preparation and stage presence coaching"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                        <Play size={10} className="text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-md transition-all duration-300"
                  aria-label="Learn more about our piano lesson packages in Singapore"
                >
                  View Piano Lesson Packages
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium rounded-md transition-all duration-300"
                  aria-label="Meet your professional piano teacher in Singapore"
                >
                  Meet Your Piano Teacher
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://static.wixstatic.com/media/0accce_cdcfedcb0dbf44febe2d0ff52922ca59~mv2.jpg/v1/fill/w_1004,h_1081,al_c,q_85,enc_avif,quality_auto/0accce_cdcfedcb0dbf44febe2d0ff52922ca59~mv2.jpg" 
                  alt="Clynton Music piano classes for kids and adults in Singapore - Professional piano and cello instruction" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Student Testimonials - Piano Lessons Singapore</h2>
            <p className="text-gray-300">Join our community of passionate musicians who have transformed their piano playing abilities through our personalized instruction in Singapore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Clynton's approach to teaching piano completely transformed my playing. His attention to technical details while nurturing musicality is exceptional. Best piano teacher in Singapore!",
                name: "Sarah Johnson",
                role: "Piano Student, 3 Years"
              },
              {
                quote: "As an adult beginner looking for piano lessons near me, I was nervous about starting. Clynton created a supportive environment where I could grow at my own pace.",
                name: "Michael Chen",
                role: "Adult Piano Student, 1 Year"
              },
              {
                quote: "My daughter has flourished under Clynton's piano instruction. His ability to connect with young students and make learning piano fun is truly a gift.",
                name: "Emily Rodriguez",
                role: "Parent of Piano Student"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-navy-800 p-8 rounded-lg border border-navy-700"
              >
                <div className="text-gold-400 mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 16H4L8 8H12L9.33333 16ZM21.3333 16H16L20 8H24L21.3333 16Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Explore Piano Lessons at Clynton Music</h2>
            <p className="text-gray-600">Discover everything we offer to help you achieve your piano learning goals in Singapore.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/about" 
              className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 text-center group"
              aria-label="Learn about Clynton's piano teaching background and philosophy"
            >
              <h3 className="text-lg font-medium text-navy-900 mb-2 group-hover:text-gold-600">About Your Piano Teacher</h3>
              <p className="text-gray-600 text-sm">Learn about our professional piano instructor's background and teaching philosophy</p>
            </Link>
            
            <Link 
              to="/services" 
              className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 text-center group"
              aria-label="View our piano lesson packages and pricing in Singapore"
            >
              <h3 className="text-lg font-medium text-navy-900 mb-2 group-hover:text-gold-600">Piano Lesson Packages</h3>
              <p className="text-gray-600 text-sm">Explore our piano lesson options and pricing for all skill levels</p>
            </Link>
            
            <Link 
              to="/schedule" 
              className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 text-center group"
              aria-label="Book your free piano lesson demo in Singapore today"
            >
              <h3 className="text-lg font-medium text-navy-900 mb-2 group-hover:text-gold-600">Free Piano Lesson Demo</h3>
              <p className="text-gray-600 text-sm">Book your complimentary piano trial lesson today</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 text-center group"
              aria-label="Contact for Piano Classes in Singapore"
            >
              <h3 className="text-lg font-medium text-navy-900 mb-2 group-hover:text-gold-600">Contact for Piano Classes in Singapore</h3>
              <p className="text-gray-600 text-sm">Contact us for questions about piano lessons or more information</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Ready to Start Piano Lessons in Singapore?</h2>
          <p className="text-navy-900 max-w-2xl mx-auto mb-8">
            Schedule your free piano lesson demo today and experience the Clynton Music difference. No prior piano experience necessary - we welcome piano students of all ages and skill levels in Singapore.
          </p>
          <Link 
            to="/schedule" 
            className="inline-block px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
            aria-label="Book your free piano lesson demo now in Singapore"
          >
            Book Your Free Piano Lesson Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;