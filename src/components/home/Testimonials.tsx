import { Star } from 'lucide-react';

import avatar from '@assets/avatar.jpg';

const Testimonials = () => {
  return (
    <section className="bg-[#E4EEF84F] py-20">
      <div className="container space-y-10 lg:space-y-20">

        <div className="main_title text-center space-y-4">
          <h2 className="font-playFair text-[#252525] text-2xl md:text-3xl lg:text-4xl font-medium"> What Our Guests Say </h2>
          <p className="text-[#6B7280E5] text-sm md:text-base max-w-xl mx-auto">
            Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((el) => (
            <div key={el} className="bg-white rounded-xl shadow p-6 space-y-4">
              
              <div className="flex gap-4">
                <div className="avatar w-12.5 h-12.5 rounded-full">
                  <img src={avatar} className='w-full h-full' alt="avatar" />
                </div>
                <div className="space-y-1">
                  <h3 className='text-[#374151] font-medium'> Emma Rodriguez </h3>
                  <p className='text-xs text-[#374151A1] font-medium'> Barcelona, Spain </p>
                </div>
              </div>

              <div className="flex gap-1">
                <Star size={20} className='fill-[#F8701B] text-transparent' /> 
                <Star size={20} className='fill-[#F8701B] text-transparent' /> 
                <Star size={20} className='fill-[#F8701B] text-transparent' /> 
                <Star size={20} className='fill-[#F8701B] text-transparent' /> 
                <Star size={20} className='fill-[#F8701B] text-transparent' /> 
              </div>

              <p className='text-[#374151A1] text-sm max-w-72'>
                "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials;
