import React from 'react'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import firebase from '../service/firebase';
import { unstable_createMuiStrictModeTheme } from '@mui/material';

let AuthContext = React.createContext(null)

export function AuthProvider({ children }) {
    let [user, setUser] = useState();

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callback();
    };
    let value = { user, signin, signout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default useAuth
