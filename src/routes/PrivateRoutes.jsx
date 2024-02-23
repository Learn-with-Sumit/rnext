import { useAuth } from "../hooks/useAuth"
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/common/Header";
const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
        {
            auth.user ? (
                <>
                    <Header />
                    <main className="mx-auto max-w-[1020px] py-8">
                        <div className="container">
                            <Outlet />
                        </div>
                    </main>
                </>
            ) : (
                <Navigate to="/login" />
            )
        }
    </>
  )
}

export default PrivateRoutes;