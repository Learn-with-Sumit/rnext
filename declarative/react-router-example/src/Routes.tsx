import { useRoutes } from "react-router";
import About from "./About";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Post from "./Post";
import PostList from "./PostList";
import Posts from "./Posts";

function Routes() {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        {
            path: "/posts",
            element: <Posts />,
            children: [
                { index: true, element: <PostList /> },
                { path: ":slug", element: <Post /> },
            ],
        },
        { path: "/about", element: <About /> },
        { path: "*", element: <NoMatch /> },
    ]);
    return element;
}

export default Routes;
