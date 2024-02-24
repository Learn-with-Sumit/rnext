import { useContext } from "react";
import { ProfileContext } from "../context";

export const useProfile = () => {
    return useContext(ProfileContext);
};
