import EventCard from "./EventCard"

const EventList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EventCard />
    </div>
  )
}

export default EventList