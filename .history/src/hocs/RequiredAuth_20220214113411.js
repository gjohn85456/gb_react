import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequiredAuth = () => {
    const location = useLocation();
    const auth = useAuth();
    console.log(location);
    console.log(auth);
    console.log(!auth.user);
    if (!auth.user) {
        //не понимаю как эта строчка работает
        return <Navigate to='/login' state={{ from: location }} />
        // return <Navigate to='/login' />
    }

    return <Outlet />
}

export default RequiredAuth;
