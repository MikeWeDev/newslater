// app/page.tsx (or use as a component)
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const newsCards = [
  {
    id: 1,
    image: "/news1.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 2,
    image: "/news2.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 3,
    image: "/news3.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
  {
    id: 4,
    image: "/news4.jpg",
    title: "Lorem Ipsum is simply dummy text of...",
    author: "Willium Skeem",
    date: "Dec 9, 2024",
  },
];

export default function Home() {
  return (
    <div className="px-6 md:px-16 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsCards.map((card) => (
          <div key={card.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <span>by {card.author}</span>
                <FaCalendarAlt className="ml-2 text-gray-400" />
                <span>{card.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
          ←
        </button>
        <button className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
          →
        </button>
      </div>
    </div>
  );
}
