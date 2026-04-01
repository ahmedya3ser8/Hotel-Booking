import { BookingHeader, BookingList } from '@/components';

const BookingPage = () => {
  return (
    <section className="pt-32 bg-[#FDFDFD] pb-20">
      <div className="container space-y-10">

        <BookingHeader />

        <BookingList />

      </div>
    </section>
  )
}

export default BookingPage;
