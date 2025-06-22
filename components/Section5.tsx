import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const newsCards = [
  {
    id: 1,
    image: "/section-5/img-1.webp",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 2,
    image: "/section-5/img-2.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 3,
    image: "/section-5/img-3.png",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 4,
    image: "/section-5/img-4.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
];

export default function Section5() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 to-indigo-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20 mr-[-30px] mb-[-30px]"></div>

      {/* News Section */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-700">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-indigo-300 transition-shadow overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 transition">
                  {card.title}
                </h3>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <span>by {card.author}</span>
                  <FaCalendarAlt className="text-gray-400 ml-2" />
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-12">
          <Button variant="outline" className="rounded-full px-4 py-2 text-blue-600 border-blue-600 hover:bg-blue-50">
            ←
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2 text-blue-600 border-blue-600 hover:bg-blue-50">
            →
          </Button>
        </div>
      </div>
    </div>
  );
}
