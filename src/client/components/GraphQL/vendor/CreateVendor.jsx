import {useMutation} from "@apollo/react-hooks";
import {ADD_VENDOR} from "./mutations";


function CreateVendor(displayname, orgnr, address, email) {

    const [addVendor, { data }] = useMutation(ADD_VENDOR);

    if(address && email) {
        addVendor({
            variables: {
                displayName: displayname,
                organizationNumber: orgnr,
                address: address,
                userEmail: email
            }
        });
        console.log(data)
    }
}

export default CreateVendor
