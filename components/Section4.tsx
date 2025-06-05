import Image from 'next/image';
import { FaClock, FaEye } from 'react-icons/fa';

export default function Section4() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="text-blue-600 text-3xl font-bold">
          Newsers <span className="text-gray-600 text-base font-light">Nespaper</span>
        </div>
        <nav className="space-x-6 text-gray-700 hidden md:block">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Detail Page</a>
          <a href="#" className="hover:underline">404 Page</a>
          <div className="inline-block relative group">
            <button className="hover:underline">Dropdown</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 py-2 px-4">
              <a href="#" className="block hover:bg-gray-100">Option 1</a>
              <a href="#" className="block hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500 text-xl">☀️</span>
            <span className="text-sm">31°C NEW YORK,<br />Mon. 10 jun 2024</span>
          </div>
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">
            🔍
          </button>
        </div>
      </header>

      {/* Trending Bar */}
      <div className="bg-black text-white px-6 py-2 flex items-center space-x-2 text-sm">
        <span className="text-blue-500 font-bold">⚡ Trending</span>
        <span>|</span>
      </div>

      {/* Subscription Section */}
      <section className="bg-[#d5d2bd] px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-blue-600 text-2xl font-bold mb-2">Newsers</h2>
            <h3 className="text-4xl font-bold mb-4">Get Every Weekly Updates</h3>
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Your Busines Email"
                className="w-full sm:w-auto px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="w-full h-64 md:h-80 relative">
            <Image
              src="/newsers_subscription.jpg"
              alt="Subscription"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg text-2xl flex items-center justify-center">
        ↑
      </button>
    </div>
  );
}
