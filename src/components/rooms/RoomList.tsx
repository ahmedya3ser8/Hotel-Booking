import RoomCard from "./RoomCard";

const RoomList = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex gap-10">

          <div className="flex flex-1 flex-col gap-6">
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </div>

          <div className="w-75 rounded-md border border-[#D9D9D9] h-fit">

            <div className="filter_header p-4 flex justify-between border-b border-b-[#D9D9D9]">
              <h3 className="font-medium"> FILTERS </h3>
              <button className="text-sm text-[#00000066] font-medium cursor-pointer">
                CLEAR
              </button>
            </div>

            <div className="filter_body px-4 py-6 space-y-4">
              
              <div className="space-y-4">
                <h4 className="font-medium text-sm"> Popular filters </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="single-bed" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="single-bed" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Single Bed
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="family-suite" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="family-suite" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Family Suite
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="double-bed" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="double-bed" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Double Bed
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="luxury-room" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="luxury-room" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Luxury Room
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm"> Price Range </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="price-500" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="price-500" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      $0 to $500
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="price-1000" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="price-1000" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      $500 to $1000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="price-2000" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="price-2000" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      $1000 to $2000
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="price-3000" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="price-3000" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      $2000 to $3000
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm"> Sort By </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="LowToHigh" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="LowToHigh" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Price Low To High
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="HighToLow" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="HighToLow" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Price High To Low
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="newest-first" className="border border-[#A8A8A8] accent-gray-500 cursor-pointer" />
                    <label htmlFor="newest-first" className="text-[#00000066] text-sm font-medium cursor-pointer">
                      Newest First
                    </label>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default RoomList;
