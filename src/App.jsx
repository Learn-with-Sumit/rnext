import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function App() {
    return (
        <div>
            <div>
                <Profile>
                    <Avatar age={39} />
                </Profile>
            </div>
        </div>
    );
}
