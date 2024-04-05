export default async function getTime() {
    const res = await fetch("http://localhost:3000/api/time");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.text();
}
