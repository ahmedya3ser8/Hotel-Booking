import { Coffee, Utensils, Wifi } from "lucide-react";

const RoomDetailsInfo = () => {
  return (
    <div className="flex justify-between">
      <div className="space-y-4">
        <h2 className="text-[#252525] font-playFair font-medium text-2xl md:text-3xl">
          Experience Luxury Like Never Before
        </h2>
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
      </div>
      <div className='text-[#252525] font-medium text-2xl md:text-3xl'> 
        $450 / day
      </div>
    </div>
  )
}

export default RoomDetailsInfo;
