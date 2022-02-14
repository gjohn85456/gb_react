import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequiredAuth = () => {
    const location = useLocation();
    const auth = useAuth();
    console.log(location);
    console.log(auth);

    if (!auth.user) {
        // return <Navigate to='/login' state={{ from: location }} />
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default RequiredAuth;
