import { useState } from "react";
import Page from "./components/Page";
import ShoppingCartContext from "./contexts/shoppingCartContext";

const items = [
    {
        id: 1,
        title: "Product 1",
    },
];

export default function App() {
    const [page, setPage] = useState("/home");
    const [cartItems, setCartItems] = useState(items);

    const handlePageChange = () => {
        setPage("/cart");
    };

    const addItem = () => {
        setCartItems([
            ...cartItems,
            {
                id: 2,
                title: "Product 2",
            },
        ]);
    };

    return (
        <div>
            <ShoppingCartContext.Provider value={cartItems}>
                <Page
                    url={page}
                    onPageChange={handlePageChange}
                    onAddItems={addItem}
                />
            </ShoppingCartContext.Provider>
        </div>
    );
}
