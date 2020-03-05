import {useQuery} from "@apollo/react-hooks";
import {GET_USER_WITH_EMAIL} from "./queries";

const GetUser = (email) => {

    const {loading, data} = useQuery(GET_USER_WITH_EMAIL, {
        variables: {userEmail: email},
        skip: !email
    });

    if (loading) return null;
    // if (error) return `Error! ${error}`;

    /*
    const firstName = data?.user?.customer?.firstName;
    const lastName = data?.user?.customer?.lastName;
    console.log("Users name: " + firstName + " " + lastName);
     */

    let userType = "";

    if(data?.user?.customer) {
        //console.log(data?.user?.customer)
        userType = "customer";
    }
    else if(data?.user?.vendor) {
        //console.log(data?.user?.vendor)
        userType = "vendor";
    }



    return userType
};

export default GetUser
