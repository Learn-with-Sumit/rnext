import { Outlet } from "react-router";
import { ProfileNavbar } from "~/components/profile-navbar";
export default function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <ProfileNavbar />
            <Outlet />
        </>
    );
}
