import {useMutation} from "@apollo/react-hooks";
import {ADD_CUSTOMER} from "./mutations";


function CreateCustomer(firstname, lastname, address, email) {

    const [addCustomer, { data }] = useMutation(ADD_CUSTOMER);

    if(firstname && lastname && email) {
        addCustomer({
            variables: {
                firstName: firstname,
                lastName: lastname,
                address: address,
                userEmail: email
            }
        });
        console.log(data)
    }
}

export default CreateCustomer
