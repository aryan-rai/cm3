import React, { useEffect } from 'react';
import { Award, Music as MusicNote, Smile, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Clynton Loh - Professional Piano & Cello Teacher Singapore | Clynton Music";
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">About Clynton Music - Your Piano Teacher in Singapore</h1>
          <p className="text-gray-300 max-w-2xl">
            A passionate approach to piano and music education that combines technical excellence with artistic expression, led by professionally trained musician Clynton Loh.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://static.wixstatic.com/media/0accce_7119a921986b41619cd56492916c35d7~mv2.jpg/v1/fill/w_750,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pic6.jpg" 
                  alt="Clynton Loh teaching piano lessons in Singapore - Professional piano instructor at Clynton Music studio" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Excellence in Piano Education Singapore</h2>
              <p className="text-gray-700 mb-6">
                Clynton was involved in the Rising Stars Concert 2018, where he performed Beethoven's Sonata Op.31 No 3 at the Esplanade Recital Studio, and also played the cello for the other chamber works and concerti performed in that concert. An accomplished cellist as well, Clynton was a member of the Singapore National Youth Chinese Orchestra (Snyco), where he was a cellist in the overseas concert tour to Taiwan, performing in various concerts such as Dauntless Spirit, Four Seasons, The Love for the Moon of SYCO, Musical Landscapes for All Seasons, and the Exuberance of Youth.
              </p>
              <p className="text-gray-700 mb-6">
                Clynton has also performed with internationally renowned orchestras such as the Singapore Chinese Orchestra and the Singapore National Youth Orchestra. An ardent admirer of J.S. Bach and the Well-tempered Clavier, Clynton's research interest is performance research of the keyboard works of Bach, he is interested in the interpretation and voicing of keyboard pieces of Bach and his contemporaries and continuously sought to better his performances through historically accurate research.
              </p>
              <p className="text-gray-700 mb-6">
                Clynton has taught piano and cello at the Aureus Academy since 2020 to students ages five and up. He hopes to inspire students by showing them his experiences he acquired throughout the years of playing the piano and cello.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-all duration-300"
                  aria-label="View our piano and cello lesson services in Singapore"
                >
                  View Piano Lesson Services
                </Link>
                <Link 
                  to="/schedule" 
                  className="px-6 py-3 bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium rounded-md transition-all duration-300"
                  aria-label="Schedule a piano lesson demo with Clynton in Singapore"
                >
                  Schedule Piano Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-950 mb-4">Our Piano Teaching Philosophy</h2>
            <p className="text-gray-700">
              We believe in a holistic approach to piano education that develops well-rounded musicians who play with both technical proficiency and emotional depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MusicNote className="w-10 h-10 text-gold-500" />,
                title: "Personalized Piano Approach",
                description: "We recognize that each piano student has unique goals, learning styles, and musical interests. Our piano teaching adapts to the individual."
              },
              {
                icon: <BookOpen className="w-10 h-10 text-gold-500" />,
                title: "Piano Technical Foundation",
                description: "A solid piano technical foundation is essential for musical freedom. We emphasize proper piano technique from the very beginning."
              },
              {
                icon: <Smile className="w-10 h-10 text-gold-500" />,
                title: "Joy in Piano Learning",
                description: "We believe learning piano should be enjoyable. We create a positive, encouraging environment where piano students thrive."
              },
              {
                icon: <Award className="w-10 h-10 text-gold-500" />,
                title: "Piano Artistic Expression",
                description: "Beyond notes and rhythms, we nurture the artistic voice of each piano student, developing their unique musical expression."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Clynton Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-navy-400/10 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://static.wixstatic.com/media/0accce_71a24323b2c1402fbb1abd9d28506301~mv2.jpg/v1/fill/w_499,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0accce_71a24323b2c1402fbb1abd9d28506301~mv2.jpg" 
                  alt="Clynton Loh portrait - Professional piano and cello instructor in Singapore" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Meet Clynton Loh: Your Professional Piano Teacher in Singapore</h2>
              <p className="text-gray-700 mb-6">
                Clynton Loh is a Singaporean-Chinese classical pianist and cellist. He started playing piano at the age of five and this led him to discover his passion in music. Under the tutelage of Angela Lin, he attained his Licentiate in Piano Performance in 2018, awarded by Trinity College London, and is currently in his final year at LASALLE College of the Arts. Besides playing the piano, he was also a former cellist of the Singapore National Youth Chinese Orchestra from 2013-2017. He represented his secondary school's Chinese Orchestra as a cellist in the Singapore Youth Festival (SYF) and attained the Certificate of Distinction under the baton of Wilson Neo. He was also a pianist for his school's drama elective module and obtained a best performance award from the school.
              </p>

              <h3 className="text-xl font-medium text-navy-900 mb-4">Professional Piano Qualifications & Achievements</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                      <MusicNote size={10} className="text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700">BA(Hons) in Music specialises in classical piano performance at LASALLE College of The Arts, University of the Arts Singapore</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                      <MusicNote size={10} className="text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700">Licentiate of Trinity College London Piano recital in Music Performance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                      <MusicNote size={10} className="text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700">ABRSM Theory Grade 8</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                      <MusicNote size={10} className="text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700">Singapore Youth Festival (Distinction) with Manjusri Secondary School</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Beyond teaching piano, Clynton remains an active performer and lifelong student of music, constantly seeking to grow as both an educator and musician.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-md transition-all duration-300"
                  aria-label="Contact Clynton for piano lesson information in Singapore"
                >
                  Contact for Piano Lessons
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium rounded-md transition-all duration-300"
                  aria-label="Learn about our piano lesson packages in Singapore"
                >
                  View Piano Lesson Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Begin Your Piano Journey in Singapore?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community of piano musicians and discover the joy of learning piano with Clynton Music. Schedule a piano demo lesson today and experience our personalized approach to piano education in Singapore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/schedule" 
              className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
              aria-label="Schedule your free piano lesson demo in Singapore"
            >
              Schedule Piano Demo
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-all duration-300"
              aria-label="Contact us for piano lesson information"
            >
              Contact for Piano Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;