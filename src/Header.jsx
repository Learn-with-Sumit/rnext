function Header() {
    return (
        <header>
            <nav class="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img
                        src="./assets/logo.svg"
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
                                src="./assets/ring.svg"
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
                                src="./assets/icons/sun.svg"
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
                                src="./assets/shopping-cart.svg"
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
