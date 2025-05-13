'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FACILITIES } from '@/app/constants/Facilities'; 
import BookingForm from '@/app/components/BookingForm';
import { FaArrowLeft, FaMoneyBillWave, FaClock, FaCheck } from 'react-icons/fa';

export default function FacilityPage({ params }: { params: { id: string } }) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  // Safely find facility with fallback
  const facility = FACILITIES.find(f => f.id === params.id) || {
    id: '',
    title: 'Not Found',
    description: '',
    price: '',
    image: '',
    features: []
  };

  // Filter related facilities (excluding current one)
  const relatedFacilities = FACILITIES.filter(f => f.id !== params.id).slice(0, 3);

  if (!facility.id) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Facility not found</h1>
        <Link 
          href="/facilities" 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Facilities
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button 
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close booking modal"
            >
              
            </button>
            
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/facilities" 
          className="inline-flex items-center text-blue-600 hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> All Facilities
        </Link>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-sm">
          {/* Images Column */}
          <div className="lg:w-1/2">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg mb-4">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative h-24 rounded-md overflow-hidden shadow">
                  <Image
                    src={facility.image} // In real app, use different images
                    alt={`${facility.title} view ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{facility.title}</h1>
              <p className="text-lg text-gray-700">{facility.description}</p>
            </div>

            {/* Pricing Card */}
            <div className="bg-green-50 border border-green-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <FaMoneyBillWave className="text-green-600 mr-2" />
                Pricing Information
              </h2>
              <p className="text-lg font-medium mb-4">{facility.price}</p>
              <button
                onClick={() => setShowBookingForm(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition duration-200"
              >
                Book Now
              </button>
            </div>

            {/* Features Section */}
            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">Facility Features</h2>
              <ul className="space-y-2">
                {facility.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <FaClock className="text-gray-600 mr-2" />
                Operating Hours
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>{facility.operatingHours?.weekdays || '7:00 AM - 10:00 PM'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Weekends</span>
                  <span>{facility.operatingHours?.weekends || '8:00 AM - 11:00 PM'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Facilities */}
        {relatedFacilities.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFacilities.map(facility => (
                <Link 
                  key={facility.id} 
                  href={`/facilities/${facility.id}`}
                  className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}