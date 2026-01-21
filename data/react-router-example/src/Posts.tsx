import { Outlet } from "react-router";

const Posts = () => {
    return (
        <div>
            <h2>Blog</h2>
            <Outlet />
        </div>
    );
};

export default Posts;
