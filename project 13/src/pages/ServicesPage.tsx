import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Piano, Music4, Blinds as Violin, UsersRound, GraduationCap, BadgeCheck } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Piano Lessons Singapore - Lesson Packages & Pricing | Clynton Music";
  }, []);

  const lessonServices = [
    {
      title: "Piano Lessons Singapore",
      icon: <Piano className="w-12 h-12 text-gold-500" />,
      description: "From classical to contemporary, our piano lessons in Singapore develop technique, musicality, and artistic expression for all ages and levels.",
      features: [
        "Proper piano technique and posture",
        "Music theory and piano sight-reading",
        "Piano repertoire across genres",
        "Piano performance preparation"
      ],
      image: "https://i.postimg.cc/qRmqb8XT/piano.jpg"
    },
    {
      title: "Cello Lessons Singapore",
      icon: <Violin className="w-12 h-12 text-gold-500" />,
      description: "Discover the rich, expressive voice of the cello with personalized instruction focusing on sound production and interpretive skills.",
      features: [
        "Bow technique and tone production",
        "Left-hand technique and intonation",
        "Solo and ensemble repertoire",
        "Orchestral excerpt preparation"
      ],
      image: "https://i.postimg.cc/yxMVtnDw/cello.jpg"
    },
    {
      title: "Music Theory Singapore",
      icon: <Music4 className="w-12 h-12 text-gold-500" />,
      description: "Strengthen your musical foundation with comprehensive theory instruction that complements and enhances your piano and instrumental studies.",
      features: [
        "Fundamentals of notation and rhythm",
        "Harmony and chord progressions",
        "Form and analysis",
        "Composition and arranging"
      ],
      image: "https://i.postimg.cc/x1KKs4kV/music.jpg"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Piano Lessons Singapore - Professional Music Education</h1>
          <p className="text-gray-300 max-w-2xl">
            Comprehensive piano and music education tailored to your goals and learning style. From beginners to advanced musicians, we provide the professional piano instruction you need to succeed in your musical journey in Singapore.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Professional Piano Lesson Programs in Singapore</h2>
            <p className="text-gray-700">
              Our core piano offerings provide comprehensive musical development across different instruments and skill levels, taught by professionally trained piano instructor Clynton Loh.
            </p>
          </div>

          <div className="space-y-16">
            {lessonServices.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gold-400/20' : 'bg-navy-400/10'} rounded-lg transform translate-x-4 translate-y-4`}></div>
                    <img 
                      src={service.image} 
                      alt={`${service.title} instruction in Singapore - Professional music lessons at Clynton Music`} 
                      className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-navy-950 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <BadgeCheck className="flex-shrink-0 mt-1 text-gold-500" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/schedule" 
                      className="px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-md transition-all duration-300"
                      aria-label={`Schedule a demo ${service.title.toLowerCase()} lesson in Singapore`}
                    >
                      Schedule a Demo
                    </Link>
                    <Link 
                      to="/about" 
                      className="px-6 py-3 bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium rounded-md transition-all duration-300"
                      aria-label="Learn about your piano instructor in Singapore"
                    >
                      Meet Your Piano Instructor
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Specialized Piano Programs Singapore</h2>
            <p className="text-gray-700">
              Beyond our core piano lessons, we offer specialized programs to enrich your musical experience and accelerate your piano progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UsersRound className="w-10 h-10 text-gold-500" />,
                title: "Piano Group Classes",
                description: "Learn piano alongside peers in a collaborative environment. Our piano group classes focus on ensemble skills, music theory, and shared musical experiences.",
                price: ""
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-gold-500" />,
                title: "Piano Exam Preparation",
                description: "Comprehensive piano preparation for ABRSM, RCM, and other music examination boards with structured practice plans and mock exams.",
                price: ""
              },
              {
                icon: <BadgeCheck className="w-10 h-10 text-gold-500" />,
                title: "Piano Performance Workshops",
                description: "Develop piano stage presence and performance skills in our monthly workshops. Includes piano performance opportunities and constructive feedback.",
                price: ""
              }
            ].map((program, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-medium text-navy-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gold-600 font-medium">{program.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piano Lesson Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Piano Lesson Packages & Pricing Singapore</h2>
            <p className="text-gray-700">
              Choose the piano lesson package that best fits your musical goals and schedule. All packages include personalized piano instruction and practice materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Piano Package",
                highlight: false,
                price: "$50",
                unit: "per 30-min piano lesson",
                description: "Perfect for new piano students just starting their musical journey.",
                features: [
                  "Weekly 30-minute private piano lessons",
                  "Customized piano learning plan",
                  "Piano practice assignments",
                  "Basic piano theory instruction"
                ]
              },
              {
                title: "Standard Piano Package",
                highlight: true,
                price: "$70",
                unit: "per 45-min piano lesson",
                description: "Our most popular piano option for dedicated students seeking steady progress.",
                features: [
                  "Weekly 45-minute private piano lessons",
                  "Comprehensive piano learning plan",
                  "Structured piano practice assignments",
                  "Piano theory and ear training",
                  "Piano performance opportunities"
                ]
              },
              {
                title: "Advanced Piano Package",
                highlight: false,
                price: "$90",
                unit: "per 60-min piano lesson",
                description: "Intensive piano instruction for serious musicians with ambitious goals.",
                features: [
                  "Weekly 60-minute private piano lessons",
                  "Advanced piano repertoire development",
                  "In-depth piano technique work",
                  "Comprehensive piano theory and analysis",
                  "Piano performance preparation",
                  "Piano recording session preparation"
                ]
              }
            ].map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  pkg.highlight 
                    ? 'bg-navy-900 text-white border-4 border-gold-400 shadow-xl transform scale-105 relative z-10' 
                    : 'bg-white border border-gray-200 shadow-md'
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-gold-400 text-navy-950 text-center py-1 font-medium text-sm">
                    MOST POPULAR PIANO PACKAGE
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-navy-900'}`}>
                    {pkg.title}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${pkg.highlight ? 'text-gold-400' : 'text-gold-600'}`}>{pkg.price}</span>
                    <span className={pkg.highlight ? 'text-gray-300' : 'text-gray-600'}> {pkg.unit}</span>
                  </div>
                  <p className={`mb-6 ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <BadgeCheck 
                          className={`flex-shrink-0 mt-1 ${
                            pkg.highlight ? 'text-gold-400' : 'text-gold-500'
                          }`} 
                          size={18} 
                        />
                        <span className={pkg.highlight ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/schedule" 
                    className={`block w-full text-center py-3 rounded-md transition-colors font-medium ${
                      pkg.highlight 
                        ? 'bg-gold-400 hover:bg-gold-500 text-navy-950' 
                        : 'bg-navy-800 hover:bg-navy-900 text-white'
                    }`}
                    aria-label={`Schedule a piano demo lesson for ${pkg.title.toLowerCase()} in Singapore`}
                  >
                    Schedule Piano Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 text-gray-600">
            <p>All new piano students start with a complimentary demo lesson to assess skill level and discuss goals.</p>
            <p className="mt-2">Discounts available for siblings and flexible payment plans available for piano lessons.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Piano Lessons FAQ Singapore</h2>
            <p className="text-gray-700">
              Answers to common questions about our piano and cello lessons in Singapore.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to learn piano in Singapore?",
                answer: "Learning piano is a lifelong journey, but most piano students can play simple pieces within 3-6 months of consistent practice. The rate of piano progress depends on practice frequency, natural aptitude, and previous musical experience. Our personalized piano approach ensures you progress at your optimal pace."
              },
              {
                question: "How much should I practice piano between lessons?",
                answer: "For beginner piano students, 15-30 minutes of daily practice is recommended. Intermediate piano students should aim for 30-45 minutes, while advanced piano students typically practice 1-2 hours daily. Consistent daily piano practice yields better results than occasional longer sessions."
              },
              {
                question: "Do I need my own piano to start lessons?",
                answer: "While having your own piano is ideal for practice, it's not necessary to start piano lessons. We can provide guidance on piano rental or purchase options that fit your budget and needs."
              },
              {
                question: "At what age can children start piano lessons in Singapore?",
                answer: "Children can typically begin piano lessons around age 5-6 and cello around age 7-8. However, readiness depends on attention span, fine motor skills, and interest. We offer a specialized approach for young piano beginners to ensure a positive learning experience."
              },
              {
                question: "Do you offer online piano lessons?",
                answer: "Yes, we offer online piano lessons for students who cannot attend in person. While in-person piano instruction is optimal for beginners, our online piano teaching methods have proven effective for students of all levels, especially for theory and advanced repertoire work."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Experience Professional Piano Education in Singapore</h2>
          <p className="text-navy-900 max-w-2xl mx-auto mb-8">
            The best way to understand our piano approach is to experience it firsthand. Schedule a complimentary piano demo lesson today and begin your musical journey with Singapore's premier piano instructor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/schedule" 
              className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
              aria-label="Book your free piano lesson demo now in Singapore"
            >
              Book Your Free Piano Lesson Demo
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent hover:bg-navy-900/10 border-2 border-navy-900 text-navy-900 font-medium rounded-md transition-all duration-300"
              aria-label="Contact us for piano lesson information in Singapore"
            >
              Contact for Piano Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;