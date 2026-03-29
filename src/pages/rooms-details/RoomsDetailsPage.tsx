import { 
  RoomDetailsHeader, 
  RoomDetailsGallery, 
  RoomDetailsInfo, 
  RoomDetailsForm, 
  RoomSpecification, 
  RoomHost 
} from "@/components";

const RoomsDetailsPage = () => {
  return (
    <section className="pt-32 bg-[#FDFDFD] pb-20">
      <div className="container space-y-10">

        <RoomDetailsHeader />

        <RoomDetailsGallery />

        <RoomDetailsInfo />

        <div className="w-full h-0.5 bg-gray-300"></div>

        <RoomDetailsForm />

        <RoomSpecification />

        <div className="w-full h-0.5 bg-gray-300"></div>

        <p className="text-[#6B7280] max-w-3xl">
          Guests will be allocated on the ground floor according to availability. 
          You get a comfortable Two bedroom apartment has a true city feeling. 
          The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. 
          The Guests will be allocated ground floor according to availability. 
          You get the comfortable two bedroom apartment that has a true city feeling.
        </p>

        <div className="w-full h-0.5 bg-gray-300"></div>

        <RoomHost />

      </div>
    </section>
  )
}

export default RoomsDetailsPage;
