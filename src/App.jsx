import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./cine/Content";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <Content />
                </div>
            </main>
        </>
    );
}

export default App;
