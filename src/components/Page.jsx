import {
    useContext,
    useEffect,
    experimental_useEffectEvent as useEffectEvent,
} from "react";
import ShoppingCartContext from "../contexts/shoppingCartContext";
import logVisit from "../utils/logVisit";

export default function Page({ url, onPageChange, onAddItems }) {
    const items = useContext(ShoppingCartContext);
    const numberOfItems = items.length;

    const onVisit = useEffectEvent((visitedUrl) => {
        logVisit(visitedUrl, numberOfItems);
    });

    useEffect(() => {
        onVisit(url);
        // logVisit(url, numberOfItems);
    }, [url]);

    return (
        <div>
            <div>This is page</div>
            <div>
                <button onClick={onPageChange}>Change page</button>
                <button onClick={onAddItems}>Add new Item</button>
            </div>
            <div>Total items in cart {numberOfItems}</div>
        </div>
    );
}
