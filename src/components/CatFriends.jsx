import { useRef } from "react";

export default function CatFriends() {
    const itemsRef = useRef(null); // only for storage

    function scrollToId(itemId) {
        const map = getMap();
        const node = map.get(itemId);
        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    function getMap() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <>
            <nav>
                <button id="button" onClick={() => scrollToId(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToId(5)}>Maru</button>
                <button onClick={() => scrollToId(9)}>Jellylorum</button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat) => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();

                                if (node) {
                                    console.log("Creating..");
                                    map.set(cat.id, node);
                                } else {
                                    console.log("Deleting..");
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: "https://placekitten.com/250/200?image=" + i,
    });
}
