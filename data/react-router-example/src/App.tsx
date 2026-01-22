import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About";
import "./App.css";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Post from "./Post";
import PostList from "./PostList";
import Posts from "./Posts";

import Layout from "./Layout";

import { getPosts } from "./data/posts";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/posts",
                Component: Posts,
                children: [
                    {
                        index: true,
                        Component: PostList,
                        loader: async () => {
                            // return my data from here
                            const data = await getPosts();
                            console.log(data);
                            return { records: data };
                        },
                    },
                    {
                        path: ":slug",
                        loader: async () => {
                            // return data from here
                            const data = await getPosts();
                            console.log(data);
                            return { records: data };
                        },
                        Component: Post,
                    },
                ],
            },
            { path: "/about", Component: About },
            { path: "*", Component: NoMatch },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
