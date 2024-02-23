import { useAuth } from "../hooks/useAuth"
import useAxios from "../hooks/useAxios"
import { useEffect, useState } from "react"

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try{
        const response = await api.get( `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          auth?.user?.id
        }`);
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch(error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) {
    return <div> Fetching your Profile data...</div>
  }

  return (
    <div>
      Welcome, {user?.firstName} {' '} {user?.lastName}

      <p>You have {posts.length} posts.</p>
    </div>
  )
}

export default ProfilePage