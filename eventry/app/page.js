import Header from "@/components/landing/Header";
import EventList from "@/components/landing/EventList";

export default function Home({searchParams: {query}}) {
  return (
    <section className="container">
      <Header />
      <EventList query={query}/>
    </section>
  );
}
