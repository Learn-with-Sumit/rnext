export default function PlaceTree({ id, placesById, parentId, onComplete }) {
    const place = placesById[id];

    const childIds = place.childIds;

    return (
        <li>
            {place.title}{" "}
            <button onClick={() => onComplete(parentId, id)}>Complete</button>
            {childIds.length > 0 && (
                <ol>
                    {childIds.map((id) => (
                        <PlaceTree
                            key={id}
                            id={id}
                            parentId={parentId}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}
