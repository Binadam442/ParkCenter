import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
       <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-[url('/images/park-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0  bg-green-700 bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cen Sad Park</h1>
              <p className="text-xl mb-8">Sports, Car wash, Dining, and Relaxation in One Place</p>
              <button className="bg-amber-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                Book a Facility
              </button>
            </div>
          </div>
        </section>


        {/* Cafe Promo */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/Censad1.jpeg" 
                alt="Park Cafe" 
                className="rounded-lg shadow-xl"
              />
              <img 
                src="/Censad1.jpeg" 
                alt="Park Cafe" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <img 
                src="/censad2.jpeg" 
                alt="Park Cafe" 
                className="rounded-lg shadow-xl"
              />
            <div className="md:w-1/2">
            <img 
                src="/censad2.jpeg" 
                alt="Park Cafe" 
                className="rounded-lg shadow-xl"
              />
              <img 
                src="/censad2.jpeg" 
                alt="Park Cafe" 
                className="rounded-lg shadow-xl"
              />
            
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

        {/* Testimonials */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visitor Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Best football pitch in town!", author: "Al-amin" },
              { quote: "The cafe's smoothies are amazing.", author: "David" },
              { quote: "Clean and modern car wash.", author: "Musa" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
                <p className="font-semibold">— {item.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}