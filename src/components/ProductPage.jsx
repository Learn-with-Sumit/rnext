import { useState } from "react";

export default function ProductPage({ product, addToCart }) {
    const [notificationMessage, setNotificationMessage] = useState(null);

    // 🔴 Avoid: Event-specific logic inside an Effect
    // useEffect(() => {
    //     if (product.isInCart) {
    //         showNotification(`Added ${product.title} to the shopping cart!`);
    //     }
    // }, [product]);

    function buyProduct() {
        addToCart(product);
        showNotification(`Added ${product.title} to the shopping cart!`);
    }

    function handleBuyClick() {
        buyProduct(product);
    }

    function handleCheckoutClick() {
        buyProduct(product);
        navigateTo("/checkout");
    }

    function showNotification(msg) {
        setNotificationMessage(msg);
    }

    function navigateTo(url) {
        console.log(`Assume that we have navigated to ${url}`);
    }

    return (
        <div>
            <div className="product">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h1>{product.price.toFixed(2)} Tk</h1>

                <div>
                    <button onClick={handleBuyClick}>Buy now</button>{" "}
                    <button onClick={handleCheckoutClick}>Checkout</button>
                </div>
            </div>
            {notificationMessage && (
                <div
                    className="notification"
                    onClick={() => setNotificationMessage(null)}
                >
                    <span>{notificationMessage}</span>
                </div>
            )}
        </div>
    );
}
