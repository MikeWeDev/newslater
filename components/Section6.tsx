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
      image: "/news1.jpg",
    },
    {
      id: 2,
      title: "Get the best speak market, news.",
      date: "Dec 9, 2024",
      image: "/news2.jpg",
    },
    {
      id: 3,
      title: "Get the best speak market, news.",
      date: "Dec 9, 2024",
      image: "/news3.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-10">
      <h2 className="text-3xl font-bold mb-4">What&apos;s New</h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full ${
              idx === 0
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-50"
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
          <div className="relative rounded-xl overflow-hidden mb-6 h-[300px]">
            <Image
              src="/main.jpg"
              alt="Main News"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Sports
            </span>
          </div>

          {/* Vertical News List */}
          <div className="space-y-4">
            {newsList.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  src={item.image}
                  alt="News thumbnail"
                  width={100}
                  height={70}
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs text-gray-500 font-semibold">SPORTS</p>
                  <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
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
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
          <div className="space-y-3">
            <SocialButton color="bg-blue-600" icon={<FaFacebookF />} label="13,977 Fans" />
            <SocialButton color="bg-rose-600" icon={<FaTwitter />} label="21,798 Follower" />
            <SocialButton color="bg-yellow-400" icon={<FaYoutube />} label="7,999 Subscriber" />
            <SocialButton color="bg-black" icon={<FaInstagram />} label="19,764 Follower" />
            <SocialButton color="bg-gray-400" icon={<FaYoutube />} label="31,999 Subscriber" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Updated type: using React.ReactNode instead of JSX.Element
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
    <div
      className={`flex items-center justify-between text-white px-4 py-3 rounded-md ${color}`}
    >
      <div className="text-xl">{icon}</div>
      <div className="font-medium">{label}</div>
    </div>
  );
}
