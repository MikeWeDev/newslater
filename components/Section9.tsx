import React from "react";
import { CalendarDays, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Section9() {
  return (
    <div className="bg-black text-white py-10 px-6 space-y-10">
      {/* Subscription */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Newsers <span className="text-gray-400">Newspaper</span></h1>
        <div className="flex flex-1 max-w-2xl">
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="rounded-l-full text-black px-4 py-2"
          />
          <Button className="rounded-r-full bg-blue-600 px-6">Subscribe Now</Button>
        </div>
      </div>

      <hr className="border-gray-700" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold mb-4">Get In Touch</h2>
          <p><span className="font-semibold">Address:</span> 123 Streat, New York</p>
          <p><span className="font-semibold">Email:</span> Example@gmail.com</p>
          <p><span className="font-semibold">Phone:</span> +0123 4567 8910</p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
          {["LIFE STYLE", "SPORTS"].map((category, i) => (
            <div key={i} className="flex items-start gap-3 mb-4">
              <img
                src="/news-10.png"
                alt="post-thumb"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="text-blue-400 font-semibold">{category}</p>
                <p>Get the best speak market, news.</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <CalendarDays size={12} /> Dec 9, 2024
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {["Sports", "Magazine", "Lifestyle", "Politician", "Technology", "Entertainment"].map((cat, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer">▶ {cat}</li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-lg font-bold mb-4">Our Gallary</h2>
          <div className="grid grid-cols-3 gap-2">
            {Array(6).fill(0).map((_, i) => (
              <img
                key={i}
                src="/news-10.png"
                alt="gallery"
                className="w-full h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl">
        ↑
      </button>
    </div>
  );
}
