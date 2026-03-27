import { Calendar, MapPin, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[url('@assets/hero.jpg')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="container flex flex-col gap-8 justify-center h-full text-white">

        <div className="space-y-4">
          <p className="w-55 h-8 rounded-full flex items-center justify-center bg-[#49B9FF80] text-sm"> The Ultimate Hotel Experience </p>
          <h1 className="max-w-xl text-2xl md:text-4xl lg:text-6xl md:leading-14 font-playFair font-extrabold"> Discover Your Perfect Getaway Destination </h1>
          <p className="max-w-lg text-sm md:text-base"> Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today. </p>
        </div>

        <form className="bg-white rounded-lg w-sm md:w-fit lg:w-4xl max-lg:mx-auto py-4 lg:py-6 px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">

          <div className="input-field text-[#767676] space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <label htmlFor="destination" className="text-sm">Destination</label>
            </div>
            <input type="text" id="destination" className="w-full px-2 py-1 border border-gray-400 rounded-sm outline-none" placeholder="Dubai" />
          </div>

          <div className="input-field text-[#767676] space-y-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <label htmlFor="checkIn" className="text-sm">Check in</label>
            </div>
            <input type="date" id="checkIn" className="w-full px-2 py-1 border border-gray-400 rounded-sm outline-none" />
          </div>

          <div className="input-field text-[#767676] space-y-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <label htmlFor="checkOut" className="text-sm">Check out</label>
            </div>
            <input type="date" id="checkOut" className="w-full px-2 py-1 border border-gray-400 rounded-sm outline-none" />
          </div>

          <div className="input-field text-[#767676] space-y-2">
            <label htmlFor="guests" className="block text-sm">Guests</label>
            <input type="number" min={1} max={4} id="guests" className="w-full px-2 py-1 border border-gray-400 rounded-sm outline-none" placeholder="2" />
          </div>

          <button type="submit" className="max-md:col-span-2 md:w-30 h-10 bg-[#18181B] rounded-sm flex items-center justify-center gap-2 cursor-pointer">
            <Search size={16} />
            Search
          </button>

        </form>

      </div>
    </section>
  )
}

export default Hero;
