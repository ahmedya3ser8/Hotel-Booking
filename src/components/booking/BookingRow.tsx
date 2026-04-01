import { MapPin, Users } from 'lucide-react';

import roomImgae from '@assets/room-1.jpg';

const BookingRow = () => {
  return (
    <div className="grid grid-cols-[3fr_2fr_1fr] items-center pt-4">

      <div className="flex items-center gap-4">
        <div className="image">
          <img src={roomImgae} className='w-full h-40' alt="roomImgae" />
        </div>
        <div className="content space-y-3">
          <h3 className="text-[#343434] text-2xl font-medium font-playFair"> 
            Crystal Waters Resort
            <span className="font-medium text-sm"> (Single Bed) </span>
          </h3>
          <div className="text-[#838383] font-medium flex items-center gap-1">
            <MapPin size={16} />
            <span className='text-sm'> Night Sky Parkway, AZ, USA </span>
          </div>
          <div className="text-[#6B7280E3] font-medium flex items-center gap-1">
            <Users size={16} />
            <span className='text-sm'> Guests: 2 </span>
          </div>
          <p className='text-lg'> Total: $200 </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="space-y-1">
          <h3 className='text-[#515151] font-medium'>
            Check-In:
          </h3>
          <p className='text-[#6B7280E3] font-medium text-sm'>
            September 20, 2025
          </p>
        </div>
        <div className="space-y-1">
          <h3 className='text-[#515151] font-medium'>
            Check-Out:
          </h3>
          <p className='text-[#6B7280E3] font-medium text-sm'>
            September 26, 2025
          </p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <span className='block size-3 rounded-full bg-[#00A625]'></span>
        <span className='text-[#00A625]'> Paid </span>
      </div>

    </div>
  )
}

export default BookingRow;

// bg-[#D30B00] text-[#D30B00]
// Pay now text-[#515151] text-sm font-medium border border-[#515151] btn
