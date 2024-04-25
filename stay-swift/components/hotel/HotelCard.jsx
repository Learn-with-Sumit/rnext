import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <img
        src="./assets/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
