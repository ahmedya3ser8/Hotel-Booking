import { MapPin, Star } from 'lucide-react';

import roomImage from '@assets/room-1.jpg';

const FeaturedHotels = () => {
  return (
    <section className="bg-[#E4EEF84F] py-20">
      <div className="container space-y-10 lg:space-y-20">

        <div className="main_title text-center space-y-4">
          <h2 className="text-[#252525] font-playFair text-3xl md:text-4xl lg:text-5xl font-medium"> Featured Hotels </h2>
          <p className="text-[#6B7280E5] text-sm md:text-base max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties around the world, 
            offering unparalleled luxury and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1,2,3,4].map((el) => (
            <div key={el} className="bg-white rounded-xl drop-shadow-md">

              <div className="room_image relative">
                <img src={roomImage} className='w-full h-50' alt="room" />
                <span className="absolute top-4 left-4 w-fit px-3 py-1 bg-white rounded-full text-xs text-[#1F2937]">
                  Best Seller
                </span>
              </div>

              <div className="content py-6 px-4 space-y-4">

                <div className="space-y-2">

                  <div className="flex justify-between items-center">
                    <h3 className='text-[#252525] text-xl font-medium'> The Grand Resort </h3>
                    <div className='flex items-center gap-1'> 
                      <Star size={14} className='fill-[#F8701B] text-transparent' /> 
                      <span className='text-black text-sm'> 4.9 </span> 
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#6B7280E3] text-sm">
                    <MapPin size={16} />
                    <p> Maldives </p>
                  </div>

                </div>

                <div className="flex justify-between items-center">
                  <div className='flex items-center font-medium text-xl'> 
                    $450 / 
                    <span className='text-[#6B7280E3] text-sm'> night </span>
                  </div>
                  <button className='border border-[#D9D9D9] text-sm font-medium py-2 px-4 rounded-sm cursor-pointer transition duration-300 hover:bg-gray-50'> 
                    View Details 
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        <button className='block bg-white border border-[#D9D9D9] rounded-sm w-40 mx-auto p-2 cursor-pointer'> 
          View All Hotels
        </button>

      </div>
    </section>
  )
}

export default FeaturedHotels;
