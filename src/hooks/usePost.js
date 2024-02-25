import { useContext } from "react";

import { PostContext } from "../context";

export const usePost = () => {
    return useContext(PostContext);
};
