import React, {useCallback, useEffect, useState} from "react";
import { withRouter } from "react-router";
import app from "../components/Firebase/firebase";
import {Redirect, Link} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {ADD_CUSTOMER} from "../components/GraphQL/customer/mutations";
import FormCustomerInfo from "../components/Forms/FormCustomerInfo";

const CustomerSignUp = ({ history }) => {

    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: ''
    });
    const [isFirebaseUserCreated, setIsFirebaseUserCreated] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [addCustomer, {customerData}] = useMutation(ADD_CUSTOMER);

    // OPPRETTER VENDOR I DB:
    useEffect( () => {
        if (isFirebaseUserCreated) {
            addCustomer({
                variables: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    address: customer.address || "Ingen registrert adresse",
                    userEmail: customer.email
                }
            });
            console.log(customerData);
            setRedirect(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isFirebaseUserCreated]);

    // OPPRETTER BRUKER I FIREBASE:
    const submitCustomerSignUp = useCallback(async event => {
        event.preventDefault();
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(customer.email, customer.password);

            await setIsFirebaseUserCreated(true)

        } catch (error) {
            alert(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, customer.email, customer.password]);

    if(redirect) return <Redirect to='/' />;
    return (
        <div>
            <h1 className="log-in-title">Kunde registrering</h1>
            <FormCustomerInfo customer={customer} setCustomer={setCustomer}/>
            <button className="reg-btn" onClick={submitCustomerSignUp}>Registrer</button>
            <p style={{fontSize: '12px', textAlign: 'center'}}>Har du allerede en bruker? <Link to="/signin">Logg inn her</Link></p>
        </div>
    );
};

export default withRouter(CustomerSignUp);
