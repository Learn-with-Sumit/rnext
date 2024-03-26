import Assignments from "../components/Assignments";
import Notifications from "../components/Notifications";
import Quiz from "../components/Quiz";

export default function DashboardPage() {
    return (
        <>
            <Assignments />
            <Notifications />
            <Quiz />
        </>
    );
}
