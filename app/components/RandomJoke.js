import getJoke from "@/utils/getJokeAxios";

export default async function RandJoke() {
    const joke = await getJoke();

    return <div className="mt-5">{joke.data.value}</div>;
}
