import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Section8() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black px-6 md:px-12 py-10">
      {/* Life Style Heading */}
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Life Style</h1>
      <hr className="mb-8 border-gray-300" />

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {["/section-8/img-1.1.jpg", "/section-8/img-2.avif"].map((src, i) => (
            <Card key={i} className="w-full md:w-96 h-96 relative overflow-hidden shadow-lg rounded-xl">
              <Image
                src={src}
                alt="Life Style thumbnail"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 384px"
                priority={i === 0}
              />
              <CardContent className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold leading-tight">
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
        <div className="w-full lg:w-72 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Lifestyle", "Sports", "Politics", "Magazine", "Game", "Movie", "Travel", "World"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Promo Card */}
          <div className="rounded-xl overflow-hidden shadow border">
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-4 text-white text-center">
              <div className="text-sm font-semibold">The Most Popular</div>
              <div className="text-lg font-bold mb-4">News & Magazine WP Theme</div>
              <Button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full">
                Shop Now
              </Button>
            </div>
            <div className="relative w-full h-40">
              <Image
                src="/section-8/img-3.webp"
                alt="Shop Now"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}