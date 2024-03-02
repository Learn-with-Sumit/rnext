import Family from "./props/Family";

import ParentComponent from "./components/ParentComponent";

function App() {
    return (
        <div className="m-4">
            <Family />

            <ParentComponent />
        </div>
    );
}

export default App;
