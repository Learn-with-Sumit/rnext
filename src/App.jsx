import FindUser from "./transition/FindUser";
import { users } from "./transition/fakeuser";

function App() {
    return(
        <FindUser users={users} />
    )
}

export default App;
