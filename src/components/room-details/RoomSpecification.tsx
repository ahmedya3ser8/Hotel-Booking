import { BadgeCheck, Heart, House, MapPin } from "lucide-react";

const RoomSpecification = () => {
  return (
    <div className="specification space-y-4">
      <div className="flex items-center gap-2">
        <span>
          <House className="text-[#454545]" />
        </span>
        <div className="space-y-1">
          <h3 className="text-[#454545] font-semibold text-lg"> 
            Clean Room 
          </h3>
          <p className="text-sm text-[#6B7280] font-medium"> 
            You will have the clean room for you. 
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <BadgeCheck className="text-[#454545]" />
        </span>
        <div className="space-y-1">
          <h3 className="text-[#454545] font-semibold text-lg"> 
            Enhanced Clean 
          </h3>
          <p className="text-sm text-[#6B7280] font-medium"> 
            This host has committed to Staybnb's cleaning process. 
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <MapPin className="text-[#454545]" />
        </span>
        <div className="space-y-1">
          <h3 className="text-[#454545] font-semibold text-lg"> 
            Great location 
          </h3>
          <p className="text-sm text-[#6B7280] font-medium"> 
            90% of recent guests gave the location a 5-star rating. 
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <Heart className="text-[#454545]" />
        </span>
        <div className="space-y-1">
          <h3 className="text-[#454545] font-semibold text-lg"> 
            Great check-in experience 
          </h3>
          <p className="text-sm text-[#6B7280] font-medium"> 
            100% of recent guests gave the check-in process a 5-star rating. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoomSpecification;
