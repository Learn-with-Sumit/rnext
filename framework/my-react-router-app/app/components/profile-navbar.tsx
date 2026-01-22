import { NavLink } from "react-router";

export function ProfileNavbar() {
    return (
        <nav>
            <NavLink to="/profile/account">Account</NavLink>
            <NavLink to="/profile/settings">Settings</NavLink>
        </nav>
    );
}
