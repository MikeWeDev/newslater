import Image from 'next/image';
import { FaClock, FaEye } from 'react-icons/fa';

export default function Section3() {
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
        <span>| an.</span>
      </div>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Top Story */}
        <div className="lg:col-span-2 bg-gray-50 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Top Story</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 h-60 relative">
              <Image
                src="/newsers_top_story.jpg"
                alt="Top Story Image"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">
                Stoneman Clandestine Ukrainian claims successes against Russian.
              </h3>
              <div className="flex items-center space-x-4 mt-4 text-gray-500">
                <span className="flex items-center space-x-1">
                  <FaClock /> <span>06 minute read</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaEye /> <span>3.5k Views</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar News */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gray-300 rounded overflow-hidden relative">
                <Image
                  src="/newsers_sidebar.jpg"
                  alt="Sidebar News"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Get the best speak market, news.</h4>
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <span className="flex items-center space-x-1">
                    <FaClock /> <span>06 minute read</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaEye /> <span>3.5k Views</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg text-2xl flex items-center justify-center">
        ↑
      </button>
    </div>
  );
}