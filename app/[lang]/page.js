import { getDictionary } from "./dictionaries/dictionaries";

export default async function Homepage({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <div>{dict.hello}</div>;
}
