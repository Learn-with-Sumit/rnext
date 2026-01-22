import { NavLink } from "react-router";
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/profile">Profile</NavLink>
        </nav>
    );
};

export default Navbar;
