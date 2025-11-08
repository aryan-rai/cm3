import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Clynton Music - Piano Lessons Singapore | Get in Touch";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send(
        'service_obof4km',  // Service ID
        'template_8sywcha', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'ALpJq5F0GgILN27qP' // Public Key (User ID)
      )
      .then(
        () => {
          console.log('Email successfully sent!');
          setFormSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send email:', error.text);  // Log the full error response
          alert('Failed to send message. Please try again later.');
        }
      );
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy-950 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-4">Contact for Piano Classes in Singapore</h1>
          <p className="text-gray-300 max-w-2xl">
            Have questions about piano lessons, cello lessons, or want to learn more about our music education programs in Singapore? We'd love to hear from you. Reach out using the form below or contact us directly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Get in Touch for Piano Lessons</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-400/20 p-3 rounded-full text-gold-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-900">Phone for Piano Lessons</h3>
                  <p className="text-gray-600">+6586132683</p>
                  <p className="text-sm text-gray-500">Call for immediate piano lesson assistance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold-400/20 p-3 rounded-full text-gold-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-900">Email for Piano Classes</h3>
                  <p className="text-gray-600">contact@clyntonmusic.com</p>
                  <p className="text-sm text-gray-500">We respond to piano inquiries within 24 hours</p>
                </div>
              </div>
              
             <div className="flex items-start space-x-4">
               <div className="bg-gold-400/20 p-3 rounded-full text-gold-600">
                 <div className="w-5 h-5 text-gold-500 mt-0.5">📍</div>
               </div>
               <div>
                 <h3 className="font-medium text-navy-900">Location</h3>
                 <p className="text-gray-600">BLK 20B LORONG 3 GEYLANG</p>
                 <p className="text-gray-600">Singapore 383020</p>
                 <p className="text-sm text-gray-500">Visit us for in-person piano lessons</p>
               </div>
             </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <h3 className="font-medium text-navy-900 mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.768566159892!2d103.8738163!3d1.3143602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19d6733df0f1%3A0x675689e16889661e!2sClynton%20Music%3A%20Piano%20%26%20Cello%20Lessons%20in%20Singapore!5e0!3m2!1sen!2suk!4v1759171637189!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clynton Music Location - Piano & Cello Lessons in Singapore"
                ></iframe>
              </div>
            </div>
            

            <div className="bg-gold-50 p-6 rounded-lg">
              <h3 className="font-medium text-navy-900 mb-3">Quick Piano Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/schedule" 
                  className="block w-full text-center px-4 py-2 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-colors"
                  aria-label="Schedule your free piano lesson demo in Singapore"
                >
                  Schedule Free Piano Demo Lesson
                </Link>
                <Link 
                  to="/services" 
                  className="block w-full text-center px-4 py-2 bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium rounded-md transition-colors"
                  aria-label="View our piano lesson packages and pricing in Singapore"
                >
                  View Piano Lesson Packages
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 mb-4">
                  <Send size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Piano Message Sent Successfully!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for your interest in our piano lessons! We've received your message and will get back to you within 24 hours to discuss your piano learning journey.
                </p>
                <div className="space-x-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 bg-navy-800 text-white rounded-md hover:bg-navy-900 transition-colors"
                  >
                    Send Another Piano Message
                  </button>
                  <Link 
                    to="/schedule" 
                    className="px-6 py-2 bg-gold-400 text-navy-950 rounded-md hover:bg-gold-500 transition-colors"
                    aria-label="Schedule your piano demo lesson now"
                  >
                    Schedule Piano Demo Lesson
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Contact us for a Free Piano class! (Available Online & In-Person)</h2>
                <p className="text-gray-600 mb-6">
                  Whether you're interested in piano lessons, cello lessons, or have general questions about our music education programs in Singapore, we're here to help.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-colors ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-colors ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-colors ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="Piano Lessons">Piano Lessons Inquiry</option>
                        <option value="Cello Lessons">Cello Lessons Inquiry</option>
                        <option value="Demo Lesson">Piano Demo Lesson Booking</option>
                        <option value="Lesson Packages">Piano Lesson Packages & Pricing</option>
                        <option value="General Inquiry">General Piano Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-colors"
                      placeholder="Tell us about your piano goals, experience level, or any questions you have..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-950 font-medium rounded-md transition-all duration-300 transform hover:scale-105 flex items-center"
                    >
                      <Send size={18} className="mr-2" />
                      Send Piano Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;