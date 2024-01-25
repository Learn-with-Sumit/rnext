import { useState } from "react";
import ProductPage from "./ProductPage";

const productInitialData = {
    title: "iPhone 15 pro",
    description: "Ami kinte parbo na karon ami gorib",
    price: 200000,
    isInCart: true,
};

export default function Example1() {
    const [product, setProduct] = useState(productInitialData);

    const handleAddToCart = () => {
        setProduct({
            ...product,
            isInCart: true,
        });
    };

    return (
        <div>
            <ProductPage product={product} addToCart={handleAddToCart} />
        </div>
    );
}
