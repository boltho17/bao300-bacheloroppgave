import {useQuery} from "@apollo/react-hooks";
import {GET_VENDOR_WITH_EMAIL} from "./queries";

const GetVendor = (email) => {

    const {loading, data} = useQuery(GET_VENDOR_WITH_EMAIL, {
        variables: {email},
        skip: !email
    });

    if (loading) return null;
    // if (error) return `Error! ${error}`;

    return data?.vendors[0]
};

export default GetVendor
