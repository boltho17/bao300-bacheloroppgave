import React, {useEffect, useState} from 'react';
import firebase from "./firebase";
import GetUser from "../GraphQL/user/GetUser";


export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    // Calls GetUser with the logged in users mail, returns the user type as a String(Customer or Vendor)
    const userType = GetUser(firebase.auth().currentUser?.email);
    if (userType) {
        // console.log("AuthContext.js: " + userType);
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser, userType
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


