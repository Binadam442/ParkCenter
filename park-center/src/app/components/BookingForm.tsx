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
    <div className="space-y-3 max-w-md mx-auto p-3 text-sm">
      {/* Contact Section */}
      <div className="bg-green-50 p-3 rounded-lg">
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600 mr-2" />
          <div>
            <h3 className="font-bold"> Booking session</h3>
            <p className="font-medium my-1">Contact: {contactNumber}</p>
            <div className="flex gap-3 mt-2">
              <a href={`https://wa.me/${contactNumber}`} className="text-green-700 font-medium flex items-center">
                <FaWhatsapp className="mr-1" /> WhatsApp
              </a>
              <span className="text-gray-500">or</span>
              <a href={`tel:${contactNumber}`} className="text-blue-600 font-medium flex items-center">
                <FaPhone className="mr-1" /> Call
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs bg-yellow-100 text-red-600 p-1 rounded mt-2 text-center">
          <FaInfoCircle className="inline mr-1" />
          <strong>Note:</strong> Booking confirmation required before play
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center gap-4 p-2 bg-gray-50 rounded-lg">
        <Link href={socialMedia.facebook} className="text-blue-600">
          <FaFacebook />
        </Link>
        <Link href={socialMedia.instagram} className="text-pink-600">
          <FaInstagram />
        </Link>
        <Link href={socialMedia.twitter} className="text-blue-400">
          <FaTwitter />
        </Link>
      </div>

      {/* Final Note */}
      <p className="text-xs text-gray-600 text-center">
        <FaInfoCircle className="inline mr-1" />
        Available slots: Weekdays and  Weekends
      </p>
    </div>
  );
}