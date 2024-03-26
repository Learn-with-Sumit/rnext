import Assignments from "../components/Assignments";
import Notifications from "../components/Notifications";
import Quiz from "../components/Quiz";

export default function DashboardPage() {
    return (
        <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
            <Assignments />
            <Notifications />
            <Quiz />
        </div>
    );
}
