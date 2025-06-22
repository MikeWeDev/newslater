import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Section7() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black">
     

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-12 py-10">
        {/* Left Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {["/section-7/img-1.jpg", "/section-7/img-2.jpg"].map((src, i) => (
            <Card key={i} className="w-full md:w-96 shadow hover:shadow-lg transition-all">
              <div className="relative w-full h-60 rounded-t-xl overflow-hidden">
                <Image
                  src={src}
                  alt="News thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority={i === 0}
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  There are many variations of passages of Lorem Ipsum available,
                </h2>
                <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <span>by Willium Smith</span>
                  <CalendarDays size={16} />
                  <span>Dec 9, 2024</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-72 space-y-6">
          {["FASHION", "LIFE STYLE"].map((category, i) => (
            <div key={i} className="border-b pb-4">
              <div className="flex gap-3 items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/section-7/img-3.webp"
                    alt="thumb"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-semibold">{category}</div>
                  <div className="text-sm font-medium text-gray-800">Get the best speak market, news.</div>
                  <div className="text-xs text-gray-500">December 9, 2024</div>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full rounded-full text-blue-600 border-blue-600">
            View More
          </Button>

          <div className="pt-4">
            <h3 className="font-bold text-lg mb-2">Trending Tags</h3>
            {/* Add tag list here */}
          </div>
        </div>
      </div>

    
    </div>
  );
}