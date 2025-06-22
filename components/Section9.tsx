import React from "react";
import { CalendarDays, Facebook, Twitter, Youtube, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Section9() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white py-12 px-6 space-y-12">
      {/* Header & Subscribe */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-white">Stay Connected with <span className="text-blue-500">Newsers</span></h1>
        <p className="text-gray-400 text-sm">Join our mailing list for weekly top stories and updates.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="text-black px-4 py-2 rounded-full w-full sm:w-96"
          />
          <Button className="rounded-full bg-blue-600 px-6 flex items-center gap-2">
            Subscribe <Send size={16} />
          </Button>
        </div>
      </div>

      <hr className="border-gray-700 w-full" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Newsers is your modern digital newspaper, delivering top-notch journalism,
            expert opinions, and current events around the world. We are committed to
            bringing you stories that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "World", "Politics", "Technology", "Contact", "Privacy Policy"].map((link, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer">› {link}</li>
            ))}
          </ul>
        </div>

        {/* Recent Highlights */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Highlights</h2>
          {["LIFESTYLE", "SPORTS"].map((topic, i) => (
            <div key={i} className="mb-4">
              <p className="text-blue-400 font-semibold text-sm">{topic}</p>
              <p className="text-gray-300 text-sm">Discover what’s trending in {topic.toLowerCase()} now.</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <CalendarDays size={12} className="mr-1" /> Dec 9, 2024
              </div>
            </div>
          ))}
        </div>

        {/* Social & Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <p className="text-sm text-gray-300 mb-2"><span className="font-semibold">Email:</span> hello@newsers.com</p>
          <p className="text-sm text-gray-300 mb-4"><span className="font-semibold">Phone:</span> +0123 4567 8910</p>
          <div className="flex gap-4 text-gray-400">
            <Facebook className="w-5 h-5 hover:text-blue-500" />
            <Twitter className="w-5 h-5 hover:text-sky-400" />
            <Youtube className="w-5 h-5 hover:text-red-500" />
            <Linkedin className="w-5 h-5 hover:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; 2025 Newsers. All rights reserved.
      </div>     
    </div>
  );
}
