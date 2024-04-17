import HeroSection from "@/components/details/HeroSection"
import EventDetails from "@/components/details/EventDetails"
import EventVenue from "@/components/details/EventVenue"

const page = () => {
  return (
    <>
      <HeroSection />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  )
}

export default page