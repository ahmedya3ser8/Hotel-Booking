
const RoomDetailsForm = () => {
  return (
    <form className="bg-white rounded-lg drop-shadow-lg flex justify-between p-6 max-w-5xl">

      <div className="flex items-center gap-10">

        <div className="input-field flex flex-col gap-2">
          <label htmlFor="checkIn" className="text-sm text-[#515151] font-medium">Check-In</label>
          <input type="date" id="checkIn" className="w-full p-2 text-[#6B7280C9] text-sm border border-gray-400 rounded-sm outline-none" />
        </div>

        <div className="w-px h-15 bg-gray-300"></div>

        <div className="input-field flex flex-col gap-2">
          <label htmlFor="checkOut" className="text-sm text-[#515151] font-medium">Check-Out</label>
          <input type="date" id="checkOut" className="w-full p-2 text-[#6B7280C9] text-sm border border-gray-400 rounded-sm outline-none" />
        </div>

        <div className="w-px h-15 bg-gray-300"></div>

        <div className="input-field flex flex-col gap-2">
          <label htmlFor="guests" className="text-sm text-[#515151] font-medium">Guests</label>
          <input type="number" min={1} max={4} id="guests" className="w-full p-2 text-[#6B7280C9] text-sm border border-gray-400 rounded-sm outline-none" placeholder="2" />
        </div>

      </div>

      <button type="submit" className="bg-primary text-white rounded-sm w-xs h-12.5 cursor-pointer">
        Check Availability
      </button>

    </form>
  )
}

export default RoomDetailsForm;
