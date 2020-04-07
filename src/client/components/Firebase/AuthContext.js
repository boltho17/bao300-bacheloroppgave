import React, {useEffect, useState} from 'react';
import firebase from "./firebase";
import GetUser from "../GraphQL/user/GetUser";
import GetVendor from "../GraphQL/vendor/GetVendor";


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

    // Calls GetVendor with the logged in users mail, returns the vendor object
    const vendor = GetVendor(firebase.auth().currentUser?.email);
    if(vendor) {
        // console.log(vendor)
    }

    return (
        <AuthContext.Provider
            value={{
                vendor, currentUser, userType
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


