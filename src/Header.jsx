import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Moon from "./assets/icons/moon.svg";
import ShoppingCart from "./assets/shopping-cart.svg";

function Header() {
    return (
        <header>
            <nav class="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img
                        src={Logo}
                        width="139"
                        height="26"
                        alt=""
                    />
                </a>

                <ul class="flex items-center space-x-5">
                    <li>
                        <a
                            class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img
                                src={Ring}
                                width="24"
                                height="24"
                                alt=""
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img
                                src={Moon}
                                width="24"
                                height="24"
                                alt=""
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img
                                src={ShoppingCart}
                                width="24"
                                height="24"
                                alt=""
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
