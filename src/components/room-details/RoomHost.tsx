import { Star } from 'lucide-react';

import avatarImage from '@assets/avatar.jpg';

const RoomHost = () => {
  return (
    <div className="space-y-6">

      <div className="flex items-center gap-4">

        
        <div className="avatar w-17.5 h-17.5 rounded-full">
          <img src={avatarImage} className="w-full h-full" alt="avatarImage" />
        </div>

        <div className="space-y-2">
          
          <h3 className="text-xl font-medium text-[#374151]">
            Hosted by Emma Rodriguez
          </h3>

          <div className="flex items-center gap-6">

            <div className="reviews flex items-center gap-2">
              <div className="star_rating flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} className='fill-[#F8701B] text-transparent' /> 
                ))}
              </div>
              <span className='text-sm'> 200+ reviews </span>
            </div>

            <p className="text-sm">
              Response rate: 100%
            </p>

            <p className="text-sm">
              Response time: 30 min
            </p>

          </div>

        </div>

      </div>

      <button className="bg-primary text-white py-2 px-4 rounded-sm cursor-pointer">
        Contact Now
      </button>

    </div>
  )
}

export default RoomHost;
