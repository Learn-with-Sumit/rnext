import Logo from "./Logo";
const Navbar = () => {
    return (
        <nav className="py-4 md:py-6 border-b">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <Logo />
            </div>

        </nav>
    );
};

export default Navbar;
