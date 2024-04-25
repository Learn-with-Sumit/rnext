import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

            {bookings &&
                bookings.length > 0 &&
                bookings.map((booking) => (
                    <div
                        id={booking.id}
                        className="bg-[#ebf6e9] p-4 rounded-md"
                    >
                        <BookingCard
                            hotelId={booking.hotelId}
                            checkin={booking.checkin}
                            checkout={booking.checkout}
                        />
                    </div>
                ))}
        </div>
    );
};

export default UpcomingBooking;
