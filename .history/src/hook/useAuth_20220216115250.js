import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import firebase from '../service/firebase';

let AuthContext = React.createContext(null)

export function AuthProvider({ children }) {
    let [user, setUser] = useState();


    // let signin = async (newUser, callback) => {
    let signin = async (newUser) => {
        const auth = getAuth(firebase);
        console.log('контрольная точка1');
        console.log(await signInWithEmailAndPassword(auth, newUser.email, newUser.password));
        console.log('контрольная точка2');
        await onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
            }
        });
        console.log('контрольная точка3');
        //callback();
    };

    let signout = async () => {
        const auth = getAuth(firebase);
        await signOut(auth);
        setUser(null);

    }
    let value = { user, signin, signout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;
