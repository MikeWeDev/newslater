import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Clock, Eye, MessageSquare } from "lucide-react";

export default function Section2() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Trending Bar */}
      <div className="bg-black text-white flex items-center p-2 px-4 text-sm">
        <div className="text-blue-500 mr-2">⚡ Trending</div>
        <div className="border-l border-white mx-2 h-4"></div>
        <p className="text-sm">An unknown printer took a galley of type and scrambled Newsan.</p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row px-6 py-8 gap-8">
        <div className="flex-1">
          <Card className="overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/laptop.jpg"
                alt="Laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />06 minute read</span>
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" />3.5k Views</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" />05 Comment</span>
                <span className="flex items-center gap-1"><ArrowUp className="w-4 h-4" />1.5k Share</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is simply dummy text of the printing</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </p>
            </CardContent>
          </Card>

          {/* Top Story section */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Top Story</h2>
            {/* You can add more stories/cards here */}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3 space-y-6">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="relative w-24 h-20">
                <Image
                  src={`/thumb${i + 1}.jpg`}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="96px"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium">Get the best speak market, news.</p>
                <div className="text-gray-500 text-xs flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4" /> 06 minute read
                  <Eye className="w-4 h-4 ml-3" /> 3.5k Views
                </div>
              </div>
            </div>
          ))}
        </aside>
      </main>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg">
        <ArrowUp className="w-5 h-5" />
      </div>
    </div>
  );
}
