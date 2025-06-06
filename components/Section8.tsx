import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Section8() {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-6">
      {/* Life Style Heading */}
      <h1 className="text-4xl font-bold mb-2">Life Style</h1>
      <hr className="mb-6" />

      <div className="flex gap-4">
        {/* Left Cards */}
        <div className="flex gap-4">
          {["/news-9.png", "/news-9.png"].map((src, i) => (
            <Card key={i} className="w-96 relative overflow-hidden h-96">
              <Image
                src={src}
                alt="Life Style thumbnail"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 384px"
                priority={i === 0} // preload first image if needed
              />
              <CardContent className="absolute bottom-0 text-white p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h2 className="text-lg font-semibold">
                  There are many variations of passages of Lorem Ipsum available,
                </h2>
                <div className="text-sm text-gray-200 mt-2 flex items-center gap-2">
                  <span>By Willium Smith</span>
                  <CalendarDays size={16} />
                  <span>Dec 9, 2024</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-72 space-y-6">
          <div className="flex flex-wrap gap-2">
            {[
              "Lifestyle",
              "Sports",
              "Politics",
              "Magazine",
              "Game",
              "Movie",
              "Travel",
              "World",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden shadow border">
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-4 text-white text-center">
              <div className="text-sm font-semibold">The Most Populer</div>
              <div className="text-lg font-bold mb-4">News & Magazine WP Theme</div>
              <Button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full">
                Shop Now
              </Button>
            </div>
            <div className="relative w-full h-40">
              <Image
                src="/news-9.png"
                alt="Shop Now"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg">
        ↑
      </button>

      {/* Footer weather */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t text-xs text-right p-2 pr-4">
        🌤 23°C Partly sunny — <span className="text-gray-500">9:04 PM — 5/20/2025</span>
      </div>
    </div>
  );
}
