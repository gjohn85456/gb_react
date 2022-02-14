import { Navigate } from "react-router-dom";

const RequiredAuth = () => {
    const location = userLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to={'login'} state={{ from: location }} />
    }
}

export default RequiredAuth