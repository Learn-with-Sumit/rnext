import HotelCard from "./HotelCard";
import { getAllHotels } from "@/database/queries";

const HotelList = async () => {
  const allHotels = await getAllHotels();
  console.log(allHotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
       <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
