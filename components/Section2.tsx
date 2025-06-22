import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Clock, Eye, MessageSquare } from "lucide-react";

export default function Section2() {
  const arr2 = [
    { img: "/section-2/img-2.webp" },
    { img: "/section-2/img-3.jpeg" },
    { img: "/section-2/img-1.png" },
    { img: "/section-2/img-5.jpg" }
  ];

  return (
<div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white min-h-screen py-16 overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-48 w-3/4 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-t-full filter blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 mb-[-100px] w-3/4 h-96 bg-gradient-to-l from-pink-200 to-indigo-200 rounded-b-full filter blur-2xl opacity-30"></div>

      <main className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row px-6 md:px-12 lg:px-0 gap-12">
        {/* Featured Story */}
        <div className="flex-1">
          <Card className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-indigo-300 transition-shadow duration-300">
            <div className="relative w-full h-80 lg:h-[28rem]">
              <Image
                src="/section-2/img-4.webp"
                alt="Laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30"></div>
            </div>
            <CardContent className="p-8 bg-white bg-opacity-90 backdrop-blur-md text-gray-900">
              <div className="flex flex-wrap items-center text-sm space-x-6 mb-6">
                {[
                  { Icon: Clock, label: "06m read" },
                  { Icon: Eye, label: "3.5k views" },
                  { Icon: MessageSquare, label: "05 comments" },
                  { Icon: ArrowUp, label: "1.5k shares" }
                ].map(({ Icon, label }, idx) => (
                  <span key={idx} className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                    <Icon className="w-5 h-5 text-pink-600" />
                    <span className="font-medium text-gray-800">{label}</span>
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-600">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…
              </p>
            </CardContent>
          </Card>

        
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-6">
          {arr2.map((item, i) => (
            <Card
              key={i}
              className="flex gap-4 p-4 items-center rounded-lg shadow-lg hover:shadow-pink-300 transition-shadow duration-300"
            >
              <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="text-sm flex-1 text-gray-200">
                <p className="font-semibold mb-2 hover:text-indigo-200 transition-colors">
                  Get the best speak market, news.
                </p>
                <div className="text-gray-300 text-xs flex items-center gap-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-indigo-300" />
                    <span>06m read</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-indigo-300" />
                    <span>3.5k views</span>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </aside>
      </main>

    
    </div>
  );
}
