'use client';
import { FaPhone, FaWhatsapp, FaMoneyBillWave, FaInfoCircle, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function BookingForm() {
  const paymentDetails = {
    accountName: "PURO BEAUTY COMPANY",
    accountNumber: "1234567890",
    bankName: "Guaranty Trust Bank (GTB)"
  };

  const contactNumber = "07033152371";
  
  const socialMedia = {
    facebook: "#",
    instagram: "#", 
    twitter: "#"
  };

  return (
    <div className="space-y-3 max-w-md mx-auto p-3 text-sm">
      {/* Payment + Pricing Combined */}
      <div className="bg-purple-50 p-3 rounded-lg">
        <div className="flex items-start mb-2">
          <FaMoneyBillWave className="text-purple-600 mr-2 mt-0.5" />
          <div>
            <h3 className="font-bold">Payment & Pricing</h3>
            <div className="grid grid-cols-3 gap-1 mt-1">
              <span className="font-medium">Bank:</span>
              <span className="col-span-2">{paymentDetails.bankName}</span>
              
              <span className="font-medium">Account:</span>
              <span className="col-span-2">{paymentDetails.accountNumber}</span>
              
              <span className="font-medium">Name:</span>
              <span className="col-span-2">{paymentDetails.accountName}</span>
              
              <span className="font-medium">Brows:</span>
              <span>₦3,000</span>
              
              <span className="font-medium">Lashes:</span>
              <span>₦3,000</span>
              
              <span className="font-medium">Both:</span>
              <span className="text-purple-700 font-bold">₦5,000</span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Compact */}
      <div className="bg-green-50 p-3 rounded-lg">
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600 mr-2" />
          <div>
            <p className="font-bold">Send Payment Proof To:</p>
            <div className="flex gap-3 mt-1">
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
          <strong>Note:</strong> No receipt = No response
        </div>
      </div>

      {/* Social Media Compact */}
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
        Access granted within 1 hour of confirmation
      </p>
    </div>
  );
}