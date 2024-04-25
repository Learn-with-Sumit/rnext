import HotelCard from "./HotelCard";
import { getAllHotels } from "@/database/queries";

const HotelList = async () => {
  const allHotels = await getAllHotels();

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allHotels.map((hotel) =>(
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}/>
          ))
        }

      </div>
    </div>
  );
};

export default HotelList;
