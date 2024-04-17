const EventVenue = () => {
    return (
      <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9563.048507081372!2d89.4311410274292!3d25.90038347256725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711180232846!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{border: "0"}}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="p-4">
          <p className="text-[#9C9C9C] text-base mt-1">
            Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
          </p>
        </div>
      </div>
    );
  };

  export default EventVenue;
