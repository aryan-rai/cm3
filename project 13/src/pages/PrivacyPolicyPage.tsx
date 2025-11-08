import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Clynton Music | Piano Lessons Singapore";
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-gold-400" />
            <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-300 max-w-2xl">
            Your privacy is important to us. This policy explains how Clynton Music collects, uses, and protects your personal information.
          </p>
          <p className="text-gray-400 text-sm mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Clynton Music ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our piano and cello lesson programs in Singapore.
            </p>
            <p className="text-gray-700">
              By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-navy-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect the following personal information when you:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Schedule a piano or cello lesson demo</li>
              <li>Contact us through our website forms</li>
              <li>Enroll in our music lesson programs</li>
              <li>Subscribe to our newsletter or updates</li>
            </ul>
            
            <p className="text-gray-700 mb-4">This information may include:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Age (for lesson planning purposes)</li>
              <li>Musical experience and goals</li>
              <li>Lesson preferences and scheduling information</li>
            </ul>

            <h3 className="text-xl font-medium text-navy-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>To provide and maintain our piano and cello lesson services</li>
              <li>To schedule and manage lesson appointments</li>
              <li>To communicate with you about lessons, schedules, and updates</li>
              <li>To personalize your learning experience</li>
              <li>To process payments and manage billing</li>
              <li>To send promotional materials and newsletters (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (e.g., payment processors, scheduling platforms)</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Secure data transmission using SSL encryption</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure storage of physical and digital records</li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve our website functionality</li>
            </ul>
            <p className="text-gray-700">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect some website functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">Our website may use third-party services, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
              <li><strong>Calendly:</strong> For lesson scheduling and appointment management</li>
              
              <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
            </ul>
            <p className="text-gray-700">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              We provide music lessons to children and understand the importance of protecting children's privacy. When collecting information from children under 18, we:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Obtain parental consent before collecting personal information</li>
              <li>Limit collection to information necessary for lesson provision</li>
              <li>Do not share children's information with third parties without parental consent</li>
              <li>Allow parents to review, modify, or delete their child's information</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              As we operate in Singapore and may use international service providers, your information may be transferred to and processed in countries other than Singapore. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="bg-navy-50 p-6 rounded-lg">
              <h3 className="font-medium text-navy-900 mb-4">Clynton Music</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span className="text-gray-700">clyntonmusic@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span className="text-gray-700">+6586132683</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-gold-500 mt-0.5">📍</div>
                  <span className="text-gray-700">
                    BLK 20B LORONG 3 GEYLANG<br />
                    Singapore 383020
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-md transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;