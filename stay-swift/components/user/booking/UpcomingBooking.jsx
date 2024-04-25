const UpcomingBooking = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      <div className="bg-[#F6F3E9] p-4 rounded-md">
        <div className="flex justify-between items-center ">
          <div>
            <h3 className="text-xl font-semibold">Effotel By Sayaji Jaipur</h3>
            <div className="text-sm text-gray-600 my-4">
              <p>Check In: 12/12/2021</p>
              <p>Check Out: 14/12/2021</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-right">$124</h3>
            <p className="text-sm text-gray-600">$62 per night x 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBooking;
