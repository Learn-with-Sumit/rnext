import getJoke from "@/utils/getJoke";

export default async function RandJoke() {
    const joke = await getJoke();

    return <div className="mt-5">{joke.value}</div>;
}
