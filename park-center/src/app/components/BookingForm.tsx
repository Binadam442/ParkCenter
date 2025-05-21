'use client';

import { FaPhone, FaWhatsapp, FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

type BookingFormProps = {
  facilityName: string;
};

export default function BookingForm({ facilityName }: BookingFormProps) {
  const phoneNumbers = [
    { number: "07033152371", name: "Primary Contact" },
    { number: "08022061658", name: "Secondary Contact" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Book {facilityName}</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p className="mb-4">To book {facilityName}, please contact us directly:</p>
        
        <div className="space-y-4">
          {phoneNumbers.map((contact) => (
            <div key={contact.number} className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-medium">{contact.name}</h4>
              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-blue-500" />
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.number}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="mr-2 text-green-500" />
                  <a
                    href={`https://wa.me/${contact.number.replace(/\D/g, '')}`}
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Our staff will assist you with availability and payment details.
        </p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
        <h4 className="font-medium mb-2">Booking Information</h4>
        <p className="text-sm text-gray-700">
          Please have the following details ready when you call:
        </p>
        <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>Preferred date and time</li>
          <li>Duration of booking</li>
          <li>Number of participants</li>
          <li>Any special requests</li>
        </ul>
      </div>
    </div>
  );
}