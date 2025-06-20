'use client';
import { FaPhone, FaWhatsapp, FaInfoCircle, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function BookingForm() {
  const contactNumber = "07033152371";
  
  const socialMedia = {
    facebook: "#",
    instagram: "#", 
    twitter: "#"
  };

  return (
    <div className="space-y-4 md:space-y-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-5 md:p-6 text-sm sm:text-base">
      {/* Contact Section */}
      <div className="bg-green-50 p-4 sm:p-5 md:p-6 rounded-lg">
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600 mr-3 text-lg sm:text-xl md:text-2xl" />
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl">Booking Sessions</h3>
            <p className="font-medium my-2 text-sm sm:text-base md:text-lg">Contact: {contactNumber}</p>
            <div className="flex gap-4 mt-3">
              <a href={`https://wa.me/${contactNumber}`} className="text-green-700 font-medium flex items-center text-sm sm:text-base">
                <FaWhatsapp className="mr-1.5 sm:mr-2" /> WhatsApp
              </a>
              <span className="text-gray-500">or</span>
              <a href={`tel:${contactNumber}`} className="text-blue-600 font-medium flex items-center text-sm sm:text-base">
                <FaPhone className="mr-1.5 sm:mr-2" /> Call
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs sm:text-sm bg-yellow-100 text-red-600 p-2 rounded mt-3 text-center">
          <FaInfoCircle className="inline mr-1" />
          <strong>Note:</strong> Booking confirmation required before play
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center gap-5 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <Link href={socialMedia.facebook} className="text-blue-600 text-lg sm:text-xl md:text-2xl">
          <FaFacebook />
        </Link>
        <Link href={socialMedia.instagram} className="text-pink-600 text-lg sm:text-xl md:text-2xl">
          <FaInstagram />
        </Link>
        <Link href={socialMedia.twitter} className="text-blue-400 text-lg sm:text-xl md:text-2xl">
          <FaTwitter />
        </Link>
      </div>

      {/* Final Note */}
      <p className="text-xs sm:text-sm text-gray-600 text-center">
        <FaInfoCircle className="inline mr-1" />
        Available slots: Weekdays and Weekends
      </p>
    </div>
  );
}