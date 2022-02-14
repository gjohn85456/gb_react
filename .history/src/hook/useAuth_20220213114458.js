import React from 'react'
import { signInWithEmailAndPassword } from 'firebare/auth'

let AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState();

    let signin = async (newUserm, callback) => {
        const auth = getAuth(firebase);
        await signWith

    }

}
