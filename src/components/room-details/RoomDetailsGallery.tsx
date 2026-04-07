import mainImage from '@/assets/room-1.jpg';

const RoomDetailsGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="main_image">
        <img src={mainImage} className="w-full h-92.5 object-cover shadow-lg rounded-2xl" alt="mainImage" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="image">
          <img src={mainImage} className="w-full h-44 object-cover rounded-2xl shadow-md" alt="mainImage" />
        </div>
        <div className="image">
          <img src={mainImage} className="w-full h-44 object-cover rounded-2xl shadow-md" alt="mainImage" />
        </div>
        <div className="image">
          <img src={mainImage} className="w-full h-44 object-cover rounded-2xl shadow-md" alt="mainImage" />
        </div>
        <div className="image">
          <img src={mainImage} className="w-full h-44 object-cover rounded-2xl shadow-md" alt="mainImage" />
        </div>
      </div>
    </div>
  )
}

export default RoomDetailsGallery;
