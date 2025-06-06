import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Section7() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-blue-400 font-bold">⚡ Trending</div>
          <p>
            unknown printer took a galley of type and{" "}
            <span className="font-bold">scrambled Newsan</span>.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center py-4 px-8 shadow">
        <div className="text-4xl font-bold text-blue-600 leading-none">
          Newsers
          <div className="text-gray-400 text-base">Nespaper</div>
        </div>

        <div className="flex gap-6 text-base">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Detail Page
          </a>
          <a href="#" className="hover:underline">
            404 Page
          </a>
          <div className="relative group">
            <button className="hover:underline">Dropdown ▼</button>
            {/* Add dropdown logic here */}
          </div>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="text-yellow-400">☀️</div>
            <span>31°C</span>
          </div>
          <div>
            NEW YORK,
            <br /> Mon. 10 jun 2024
          </div>
          <div className="p-2 border rounded-full">
            <Search size={16} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 px-8 py-6">
        {/* Left Cards */}
        <div className="flex gap-4">
          {["/news-8.png", "/news-8.png"].map((src, i) => (
            <Card key={i} className="w-96">
              <div className="relative w-full h-60 rounded-t-xl overflow-hidden">
                <Image
                  src={src}
                  alt="News thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority={i === 0} // optionally preload first image
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">
                  There are many variations of passages of Lorem Ipsum available,
                </h2>
                <div className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                  <span>by Willium Smith</span>
                  <CalendarDays size={16} />
                  <span>Dec 9, 2024</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-72 space-y-4">
          {["FASHION", "LIFE STYLE"].map((category, i) => (
            <div key={i} className="border-b pb-2">
              <div className="flex gap-2 items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/news-8.png"
                    alt="thumb"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-xs text-blue-500 font-semibold">{category}</div>
                  <div className="text-sm font-medium">Get the best speak market, news.</div>
                  <div className="text-xs text-gray-500">December 9, 2024</div>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full rounded-full text-blue-600">
            View More
          </Button>
          <div className="pt-4">
            <h3 className="font-bold text-lg mb-2">Trending Tags</h3>
            {/* Add tags here */}
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg">
        ↑
      </button>

      {/* Footer weather */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t text-xs text-right p-2 pr-4">
        🌤 23°C Partly sunny — <span className="text-gray-500">9:03 PM — 5/20/2025</span>
      </div>
    </div>
  );
}
