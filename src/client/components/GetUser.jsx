import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_USER_WITH_EMAIL} from "./GraphQL/user/queries";

const GetUser = (email) => {
    const {loading, data} = useQuery(GET_USER_WITH_EMAIL, {
        variables: {userEmail: email}
    });

    if (loading) return null;
    // if (error) return `Error! ${error}`;

    const firstName = data?.user?.customer.firstName;
    const lastName = data?.user?.customer.lastName;
    let type = "";
    console.log("Users name: " + firstName + " " + lastName);

    /*
    if(data?.user?.customer) {
        //console.log(data?.user?.customer)
        type = "customer";
        getUserType("customer")
    }
    else if(data?.user?.vendor) {
        //console.log(data?.user?.vendor)
        type = "vendor";
        getUserType("vendor")
    }

     */

    return(
        <div>
            Velkommen {firstName} {lastName}, {type}!
        </div>
    )
};

export default GetUser
