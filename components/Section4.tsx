import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

export default function Section4() {
  return (
    <div className="relative bg-gradient-to-br from-green-100 to-blue-50 min-h-screen py-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 -ml-36 -mt-36"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl opacity-20 mr-[-40px] mb-[-40px]"></div>

      {/* Subscription Section */}
      <section className="relative z-10 max-w-5xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-green-700 text-3xl font-extrabold mb-2 hover:text-green-800 transition">Newsers</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">Don’t Miss Our Weekly Insights</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of readers who receive curated news, expert analyses, and exclusive reports every week—directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 max-w-md px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-400"
            />
            <Button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 shadow-lg transition">
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/section-4/img-1.jpg"
            alt="Newsletter Subscription"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

    
    </div>
  );
}
