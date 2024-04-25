import HotelSummaryInfo from "./HotelSummaryInfo";
import Image from "next/image";

const HotelCard = ({hotelInfo, checkin, checkout}) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={hotelInfo?.name}
        width={240}
        height={165}
      />
      <HotelSummaryInfo
        fromListPage={true}
        info={hotelInfo}
        checkin={checkin}
        checkout={checkout} />
    </div>
  );
};

export default HotelCard;
