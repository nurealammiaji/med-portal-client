import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className="w-screen mx-auto my-auto text-center">
                <br /><br />
                <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                    <span className="loading loading-spinner"></span>
                    Loading ...
                </p>
                <br /><br />
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default Private;