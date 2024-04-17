const EventSchemaScript = ({ event }) => {
    const eventName = encodeURIComponent(event?.name);


    const formattedData = {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      name: eventName,
      startDate: new Date(),
      endDate: new Date(),
      description: event?.details,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: event?.location
      },
      image: [event?.imageUrl],
      organizer: {
        "@type": "Organization",
        name: "LWS",
        url: "https://learnwithsumit.com/",
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(formattedData),
          }}
        />
      </>
    );
  };

  export default EventSchemaScript;
