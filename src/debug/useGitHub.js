import { useDebugValue, useEffect } from "react";
import { useStateDisplayName } from "./useStateDisplayName";
const useGitHub = (username) => {
    useDebugValue(`Fetching data for ${username}`);

    const [user, setUser] = useStateDisplayName(null, "userInfo");
    const [error, setError] = useStateDisplayName(null, "errorInfo");
    const [loading, setLoading] = useStateDisplayName(false, "loadingInfo");

    useDebugValue(
        error
            ? `There is an error fetching the data for ${username}`
            : `No Error fetching the data for ${username}`
    );

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );
                const responseData = await response.json();
                setUser(responseData);
                setLoading(false);
                console.log(responseData);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [username]);

    useDebugValue(user, (user) => user?.bio);
    return { user, loading, error };
};

export default useGitHub;
