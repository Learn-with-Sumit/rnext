

const PinList = async () => {
    const fetchPin = await fetch(`http://localhost:3000/api/pin`, { cache: 'no-cache' });

    const pins = await fetchPin.json();

    console.log(pins);

    return(
        <ul className="flex flex-wrap">
            {
                pins.map((pin) => (
                    <li key={pin?.id} className="border p-1 rounded m-1">
                        <h2 className="text-2xl">{pin?.title}</h2>
                        <p className="text-gray-600">{pin?.description}</p>
                        <p>{pin?.type}</p>
                        <p>{pin?.content}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default PinList