import React, {useEffect, useState} from 'react';
import firebase from "./firebase";
import GetUser from "../GetUser";


export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    // console.log(firebase.auth().currentUser?.email);
    // console.log(GetUser(firebase.auth().currentUser?.email));
    GetUser(firebase.auth().currentUser?.email);

    return(
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


