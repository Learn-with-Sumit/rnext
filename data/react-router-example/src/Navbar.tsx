import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav
            style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "5px",
            }}
        >
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    padding: 5,
                    ...(isActive ? { color: "red" } : { color: "gray" }),
                })}
            >
                Home
            </NavLink>

            <NavLink
                to="/posts"
                style={({ isActive }) => ({
                    padding: 5,
                    ...(isActive ? { color: "red" } : { color: "gray" }),
                })}
            >
                Posts
            </NavLink>

            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    padding: 5,
                    ...(isActive ? { color: "red" } : { color: "gray" }),
                })}
            >
                About
            </NavLink>
        </nav>
    );
};

export default Navbar;
