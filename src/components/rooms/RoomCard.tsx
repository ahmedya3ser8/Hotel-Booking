import { Coffee, MapPin, Star, Utensils, Wifi } from 'lucide-react';

import roomImage from '@assets/room-1.jpg';
import { useNavigate } from 'react-router-dom';

const RoomCard = () => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-6 border-b last:border-none border-b-[#6B72804D] pb-7'>

      <img 
        onClick={() => navigate(`/rooms/1`)} 
        src={roomImage} 
        className='w-full max-h-65 md:w-1/2 shadow-lg object-cover rounded-2xl cursor-pointer' 
        alt="room" 
      />

      <div className="content flex flex-col gap-4 py-4">

        <span className='text-[#838383] text-sm font-medium'>
          San Diego, CA, USA
        </span>

        <h3 className='text-[#343434] text-xl md:text-2xl lg:text-[26px] font-playFair'>
          The Grand Resort
        </h3>

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

        <div className="services flex gap-4 flex-wrap">
          <div className="bg-[#F0F0F7] text-black flex items-center gap-2 p-2 rounded-lg">
            <Wifi size={16} />
            <span className='text-xs'> free wifi </span>
          </div>
          <div className="bg-[#F0F0F7] text-black flex items-center gap-2 p-2 rounded-lg">
            <Coffee size={16} />
            <span className='text-xs'> free breakfast </span>
          </div>
          <div className="bg-[#F0F0F7] text-black flex items-center gap-2 p-2 rounded-lg">
            <Utensils size={16} />
            <span className='text-xs'> room service </span>
          </div>
        </div>

        <p className='text-xl text-[#434343] font-semibold'>
          $ 100 /day
        </p>

      </div>

    </div>
  )
}

export default RoomCard;
