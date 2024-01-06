import { useState } from "react";

const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = myList.map((artwork) => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        });
        const artwork = myNextList.find((a) => a.id === artworkId);
        artwork.seen = nextSeen;
        setMyList(myNextList);
    }

    function handleToggleYourList(artworkId, nextSeen) {
        const yourNextList = yourList.map((artwork) => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        });
        const artwork = yourNextList.find((a) => a.id === artworkId);
        artwork.seen = nextSeen;
        setYourList(yourNextList);
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {
                                onToggle(artwork.id, e.target.checked);
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
