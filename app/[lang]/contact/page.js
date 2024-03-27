import { getDictionary } from "../dictionaries/dictionaries";

export default async function Contact({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="p-20">
            <h1 className="text-2xl">{dict.contact}</h1>
        </div>
    );
}
