import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sun, TrendingUp } from "lucide-react";

const categories = [
  "SPORTS",
  "TECHNOLOGY",
  "FASHION",
  "LIFE STYLE"
];

const trendingData = [
  { img: "/section1/feature-1.webp", count: 3 },
  { img: "/section1/featrure-2.jpg", count: 5 },
  { img: "/section1/feature-3.webp", count: 2 },
  { img: "/section1/feature-4.jpg", count: 7 }
];

export default function Section1() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-800 text-white flex justify-between items-center px-6 py-3 shadow-md">
        <div className="flex items-center space-x-3">
          <TrendingUp className="text-yellow-300 w-6 h-6 animate-pulse" />
          <span className="font-bold text-lg tracking-wide">Trending</span>
          <span className="text-sm text-gray-300">| wsan.</span>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="profile"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full ring-2 ring-white"
            unoptimized
          />
          <span className="font-semibold hover:text-yellow-400 transition">News</span>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center px-8 py-4 shadow-lg">
        <div className="text-indigo-700 font-extrabold text-3xl hover:text-indigo-900 transition">
          Newsers <span className="block text-sm text-gray-400">Nespaper</span>
        </div>
        <ul className="flex space-x-8 text-sm font-medium text-gray-600">
          {["Home", "Detail Page", "404 Page", "Dropdown", "Contact Us"].map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer hover:text-indigo-800 transition"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-800 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Sun className="text-yellow-400 w-6 h-6" />
          <div className="text-sm text-gray-700">
            <p className="font-semibold">31°C</p>
            <p className="text-gray-500">NEW YORK,</p>
            <p className="text-xs text-gray-500">Mon. 10 Jun 2024</p>
          </div>
          <Search className="text-indigo-700 w-5 h-5 hover:scale-110 transition" />
        </div>
      </nav>

    {/* Trending News Horizontal Scroll */}
<div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-6 px-6">
  <div className="flex space-x-4 overflow-x-auto">
    {trendingData.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-44 transform hover:scale-105 transition-all"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={item.img}
            alt={categories[index]}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute top-0 right-0 bg-indigo-700 text-white text-xs px-2 rounded-full">
            {item.count}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">{categories[index]}</p>
        <p className="font-semibold text-sm leading-tight mt-1 text-center">
          Get the best speak market
        </p>
        <p className="text-xs text-gray-400 mt-2">December 9, 2024</p>
      </div>
    ))}
  </div>
</div>


      {/* News Section */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="hover:shadow-2xl transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/section1/img1.webp"
                alt="news"
                width={960}
                height={384}
                className="w-full h-96 object-cover"
                unoptimized
              />
              <div className="p-5 text-sm text-gray-600 flex flex-wrap gap-6 bg-white">
                <span>🕒 06 minute read</span>
                <span>👀 3.5k Views</span>
                <span>💬 05 Comments</span>
                <span>📤 1.5k Shares</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="hover:shadow-2xl transition-shadow rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/section1/img2.webp"
                alt="news"
                width={640}
                height={192}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="p-4 bg-white">
                <h2 className="text-md font-semibold hover:text-indigo-700 transition">
                  Get the best speak market, news.
                </h2>
                <p className="text-sm text-gray-600 mt-2">🕒 06 minute read</p>
                <p className="text-sm text-gray-600">👀 3.5k Views</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  );
}
