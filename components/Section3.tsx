import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, Clock, Eye, MessageSquare } from 'lucide-react';

const sidebarData = [
  { img: '/section-3/img-2.jpg', title: 'Global Economy Shift', time: '5m read', views: '2.1k' },
  { img: '/section-3/img-3.avif', title: 'Tech Giants Merge', time: '4m read', views: '1.8k' },
  { img: '/section-3/img-4.jpg', title: 'Health Breakthroughs', time: '6m read', views: '3.2k' },
];

export default function Section3() {
  return (
    <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen py-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-2xl opacity-30 -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full filter blur-2xl opacity-30 mr-[-40px] mb-[-40px]"></div>
      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Top Story Card */}
        <Card className="lg:col-span-2 shadow-2xl hover:shadow-indigo-300 transition-shadow rounded-2xl overflow-hidden">
          <div className="relative w-full h-80">
            <Image
              src="/section-3/img-1.avif"
              alt="Top Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30"></div>
          </div>
          <CardContent className="p-6 bg-white bg-opacity-90 backdrop-blur-sm">
            <h2 className="text-2xl font-extrabold mb-4">Stoneman Clandestine Ukrainian Succeses</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Discover how the clandestine operations are reshaping the regional balance of power with surprising results.
            </p>
            <div className="flex items-center space-x-6 text-gray-600 text-sm">
              <span className="flex items-center gap-1"><Clock className="w-5 h-5"/>06 min read</span>
              <span className="flex items-center gap-1"><Eye className="w-5 h-5"/>3.5k views</span>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar List */}
        <aside className="space-y-6">
          {sidebarData.map((item,i)=>(
            <div key={i} className="flex items-start bg-white bg-opacity-80 rounded-xl shadow-lg hover:shadow-pink-300 transition-shadow p-4">
              <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg hover:text-indigo-600 transition">{item.title}</h3>
                <div className="flex items-center space-x-4 text-gray-600 text-xs mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4"/>{item.time}</span>
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4"/>{item.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </main>

      {/* Scroll to Top */}
      <button className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all">
        <ArrowUp className="w-6 h-6"/>
      </button>
    </div>
  );
}
