import { MapPin, Star } from "lucide-react";

const RoomDetailsHeader = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <h1 className="text-[#252525] text-2xl md:text-3xl font-medium font-playFair"> 
          The Grand Resort 
          <span className="font-medium text-sm"> (Single Bed) </span>
        </h1>
        <span className="block bg-[#F8701B] text-white font-medium text-xs rounded-full py-1 px-3"> 20% OFF </span>
      </div>

      <div className="reviews flex items-center gap-2">
        <div className="star_rating flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={20} className='fill-[#F8701B] text-transparent' /> 
          ))}
        </div>
        <span className='text-sm'> 200+ reviews </span>
      </div>

      <div className="text-[#6B7280E3] flex items-center gap-1">
        <MapPin size={16} />
        <span className='text-sm'> Los Angeles, California, USA </span>
      </div>
    </div>
  )
}

export default RoomDetailsHeader;
