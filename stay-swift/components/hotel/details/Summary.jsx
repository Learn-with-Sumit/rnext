import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({hotelInfo, checkin, checkout}) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo
          source="details"
          info={hotelInfo}
          checkin={checkin}
          checkout={checkout}/>
      </div>
    </section>
  );
};

export default Summary;

