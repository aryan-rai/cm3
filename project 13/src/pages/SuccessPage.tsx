import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Music, ArrowRight } from 'lucide-react';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    document.title = "Payment Successful - Clynton Music | Piano Lessons Singapore";
  }, []);

  return (
    <div className="min-h-screen bg-navy-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <Music size={24} className="text-gold-400" />
            <span className="text-xl font-serif font-semibold text-navy-950">Clynton Music</span>
          </Link>
          
          <h1 className="text-3xl font-serif font-bold text-navy-950 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for your purchase! Your payment has been processed successfully.
            {sessionId && (
              <span className="block mt-2 text-sm text-gray-500">
                Session ID: {sessionId}
              </span>
            )}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-lg font-medium text-navy-900">What's Next?</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p className="flex items-start space-x-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>You will receive a confirmation email shortly</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>Access to your purchased content is now available</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>Check your account dashboard for order details</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            to="/" 
            className="w-full bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
          >
            <span>Return to Home</span>
            <ArrowRight size={16} />
          </Link>
          
          <Link 
            to="/contact" 
            className="w-full bg-transparent hover:bg-navy-100 border border-navy-800 text-navy-800 font-medium py-3 px-6 rounded-md transition-colors block"
          >
            Contact Support
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            If you have any questions about your purchase, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;