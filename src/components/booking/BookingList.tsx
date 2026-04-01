import BookingRow from "./BookingRow";

const BookingList = () => {
  return (
    <div className="space-y-6">

      <div className="border-b border-b-[#D1D1D1] pb-4 grid grid-cols-[3fr_2fr_1fr]">
        <div className="text-[#252525] font-medium w-1/3"> Hotels </div>
        <div className="text-[#252525] font-medium w-1/3"> Date & Timings </div>
        <div className="text-[#252525] font-medium w-1/3"> Payment </div>
      </div>

      {Array.from({ length: 3 }).map((_,index) => (
        <BookingRow key={index} />
      ))}

    </div>
  )
}

export default BookingList;
