import PinList from "./_components/pin-list";
import AddPin from "./_components/add-pin";
import ArrangePin from "./_components/arrange-pin";

export default function Home() {
  return (
    <section className="m-2">
      <div className="flex justify-end mx-2">
        <ArrangePin />
        <AddPin />
      </div>
      <PinList />
    </section>
  );
}
