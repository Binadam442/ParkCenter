   'use client'; // Add this for interactivity

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { FACILITIES } from './constants/Facilities';

export default function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-[url('/images/park-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[url(/images/Censad11.jpeg)] bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-green px-4 pb-60">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cen Sad Park</h1>
              <p className="text-xl mb-8">Sports, Car wash, Dining, and Relaxation in One Place</p>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-600 hover:bg-green-700 text-green px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Book a Facility
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Section - NEW */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <Link 
                key={facility.id} 
                href={`/facilities/${facility.id}`}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="h-48 relative">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{facility.title}</h3>
                  <p className="text-gray-600 mt-2">{facility.description}</p>
                  <p className="font-semibold text-green-700 mt-2">{facility.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cafe Promo */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image 
                src="/Censad1.jpeg" 
                alt="Park Cafe" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <Image 
                src="/Censad6.jpeg" 
                alt="Park Cafe" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <Image 
                src="/censad2.jpeg" 
                alt="Park Cafe" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto col-span-2"
              />
              
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Image 
                  src="/censad5.jpeg" 
                  alt="Park Cafe" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <Image 
                  src="/censad6.jpeg" 
                  alt="Park Cafe" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <Image 
                  src="/images/censad3.jpeg" 
                  alt="ftb" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <Image 
                src="/Censad1.jpeg" 
                alt="Park Cafe" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <Image 
                src="/images/Censad12.jpeg" 
                alt="Park Cafe" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              </div>
              <h2 className="text-3xl font-bold mb-4">Park Cafe & Restaurant</h2>
              <p className="text-gray-700 mb-6">
                Enjoy fresh meals and drinks after your game. Our menu includes healthy options and quick bites.
              </p>
              <Link 
                href="/cafe" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
{/* Testimonials Section with Images */}
<section className="py-16 container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12">Visitor Reviews</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { 
        quote: "Best football pitch in town!", 
        author: "Al-amin",
        image: "/images/Censad5.jpeg", // Add your image path
        role: "Football Coach" // Optional role/title
      },
      { 
        quote: "The cafe's smoothies are amazing.", 
        author: "David",
        image: "/images/testimonials/david.jpg",
        role: "Regular Customer"
      },
      { 
        quote: "Clean and modern car wash.", 
        author: "Musa",
        image: "/images/testimonials/musa.jpg",
        role: "Car Owner"
      },
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
        {/* Testimonial Text */}
        <p className="text-gray-600 italic mb-6">"{item.quote}"</p>
        
        {/* Author Info with Image */}
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-amber-500">
            <Image
              src={item.image}
              alt={`${item.author}'s profile`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">{item.author}</p>
            {item.role && (
              <p className="text-sm text-gray-500">{item.role}</p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button 
                onClick={() => setShowBookingForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <BookingForm />        
            </div>
         
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}