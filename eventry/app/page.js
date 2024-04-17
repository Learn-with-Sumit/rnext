import Header from "@/components/landing/Header";
import EventList from "@/components/landing/EventList";
import { Suspense } from 'react';
import Loading from "@/components/Loading";

export default function Home({searchParams: {query}}) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query}/>
      </Suspense>
    </section>
  );
}
