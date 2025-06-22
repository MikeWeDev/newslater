import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Section6() {
  const categories = ["Sports", "Magazine", "Politics", "Technology", "Fashion"];
  const newsList = [
    {
      id: 1,
      title: "Get the best speak market, news.",
      date: "Dec 9, 2024",
      image: "/section-6/img-2.jpg",
    },
    {
      id: 2,
      title: "Get the best speak market, news.",
      date: "Dec 9, 2024",
      image: "/section-6/img-3.jpg",
    },
    {
      id: 3,
      title: "Get the best speak market, news.",
      date: "Dec 9, 2024",
      image: "/section-6/img-4.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-gray-100 to-white">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900">What&apos;s New</h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition-all duration-200 shadow-sm ${
              idx === 0
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-gray-700 hover:bg-blue-100 border border-gray-200"
            } font-medium`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left: Main Card + News List */}
        <div className="lg:col-span-2">
          {/* Featured Image Card */}
          <div className="relative rounded-2xl overflow-hidden mb-8 h-[300px] shadow-lg">
            <Image
              src="/section-6/img-1.jpg"
              alt="Main News"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">Sports</span>
          </div>

          {/* Vertical News List */}
          <div className="space-y-6">
            {newsList.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="w-[100px] h-[70px] relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt="News thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-blue-600 font-semibold mb-1">SPORTS</p>
                  <h3 className="text-base font-semibold leading-snug text-gray-800">{item.title}</h3>
                  <div className="flex items-center text-gray-400 text-xs mt-1">
                    <FaCalendarAlt className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stay Connected */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Stay Connected</h3>
          <div className="space-y-3">
            <SocialButton color="bg-blue-600" icon={<FaFacebookF />} label="13,977 Fans" />
            <SocialButton color="bg-sky-500" icon={<FaTwitter />} label="21,798 Followers" />
            <SocialButton color="bg-red-600" icon={<FaYoutube />} label="7,999 Subscribers" />
            <SocialButton color="bg-pink-500" icon={<FaInstagram />} label="19,764 Followers" />
            <SocialButton color="bg-gray-500" icon={<FaYoutube />} label="31,999 Subscribers" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  color,
  icon,
  label,
}: {
  color: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className={`flex items-center justify-between text-white px-4 py-3 rounded-lg shadow ${color}`}>
      <div className="text-xl">{icon}</div>
      <div className="font-medium">{label}</div>
    </div>
  );
}