import { BrowserRouter, NavLink } from "react-router";
import "./App.css";
import Routes from "./Routes";
function App() {
    return (
        <BrowserRouter>
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
            <Routes />
        </BrowserRouter>
    );
}

export default App;
