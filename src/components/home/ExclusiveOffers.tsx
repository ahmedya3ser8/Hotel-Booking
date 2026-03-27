import { ArrowRight } from "lucide-react";

import offerImg from '@assets/offer-1.jpg';

const ExclusiveOffers = () => {
  return (
    <section className="bg-white py-20">
      <div className="container space-y-10 lg:space-y-20">

        <div className="main_title flex items-center justify-between">

          <div className="space-y-4">
            <h2 className="font-playFair text-[#252525] text-2xl md:text-3xl lg:text-4xl font-medium"> Exclusive Offers </h2>
            <p className="text-[#6B7280E5] text-sm md:text-base max-w-lg">
              Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
            </p>
          </div>

          <button className="flex items-center gap-2 text-[#374151] cursor-pointer group">
            View All Offers
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((el) => (
            <div key={el} className="p-4 h-60 relative rounded-xl overflow-hidden">

              <img src={offerImg} className="absolute inset-0 w-full h-full object-cover" alt="offer" />

              <div className="overlay absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90" />

              <div className="content relative flex flex-col justify-between h-full">

                <span className="w-fit px-3 py-1 bg-white rounded-full text-xs text-[#1F2937]">
                  25% OFF
                </span>

                <div className="space-y-2">
                  <h3 className="font-playFair text-xl font-medium text-white"> Summer Escape Package </h3>
                  <p className="text-sm font-medium text-white/90"> Enjoy a complimentary night and daily breakfast </p>
                  <span className="text-white/70 text-xs font-medium"> Expires Aug 31 </span>
                </div>

                <button className="flex items-center gap-2 text-white cursor-pointer group">
                  View All Offers
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExclusiveOffers;
