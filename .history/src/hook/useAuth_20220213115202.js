import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebase from '../service/firebase';

let AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState();

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password)

    }

}
