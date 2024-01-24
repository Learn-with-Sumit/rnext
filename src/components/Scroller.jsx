import { useEffect } from "react";

export default function Scroller() {
    useEffect(() => {
        function handleScroll() {
            console.log(window.scrollX, window.scrollY);
        }
        // subscribing to scroll event
        window.addEventListener("scroll", handleScroll);

        // cleanup is mandatory
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ fontSize: "100px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            adipisci ipsum minus aspernatur amet error, deleniti consequatur
            architecto veniam in, voluptas tempore unde neque? Facere earum quam
            quaerat nihil magni!
        </div>
    );
}
