import { Card, CardContent } from "@/components/ui/card";
import { Search, Sun, TrendingUp } from "lucide-react";

export default function Section1() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-black text-white flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-blue-500" />
          <span className="font-semibold">Trending</span>
          <span className="text-sm text-gray-400">| wsan.</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="font-semibold">News</span>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center px-8 py-4 shadow-md">
        <div className="text-blue-600 font-bold text-3xl">
          Newsers <span className="block text-sm text-gray-400">Nespaper</span>
        </div>
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          <li>Home</li>
          <li>Detail Page</li>
          <li>404 Page</li>
          <li>Dropdown</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex items-center space-x-2">
          <Sun className="text-yellow-400" />
          <div className="text-sm">
            <p>31°C</p>
            <p className="text-gray-400">NEW YORK,</p>
            <p className="text-xs text-gray-400">Mon. 10 jun 2024</p>
          </div>
          <Search className="text-blue-600" />
        </div>
      </nav>

      {/* Trending News Horizontal Scroll */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-4 overflow-x-auto whitespace-nowrap px-4">
        {[
          "SPORTS",
          "TECHNOLOGY",
          "FASHION",
          "LIFE STYLE",
        ].map((category, index) => (
          <div
            key={index}
            className="inline-block mx-2 w-40 text-left align-top"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src={`https://randomuser.me/api/portraits/thumb/men/${index + 10}.jpg`}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 rounded-full">
                3
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{category}</p>
            <p className="font-semibold text-sm leading-tight">
              Get the best speak market, news.
            </p>
            <p className="text-xs text-gray-500">December 9, 2024</p>
          </div>
        ))}
      </div>

      {/* News Section */}
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="news"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="p-4 text-sm text-gray-600 flex flex-wrap gap-4">
                <span>🕒 06 minute read</span>
                <span>👀 3.5k Views</span>
                <span>💬 05 Comment</span>
                <span>📤 1.5k Share</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1581091870622-6c1a9971cc17"
                alt="news"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-md font-semibold">
                  Get the best speak market, news.
                </h2>
                <p className="text-sm text-gray-600">🕒 06 minute read</p>
                <p className="text-sm text-gray-600">👀 3.5k Views</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Scroll Up Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-3 shadow-lg">
        ↑
      </button>
    </div>
  );
}
