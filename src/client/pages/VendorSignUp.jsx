import React, {useCallback, useState} from 'react';
import app from "../components/Firebase/firebase";
import FormOrgNumber from "../components/Forms/FormOrgNumber";
import FormCompanyInfo from "../components/Forms/FormCompanyInfo";
import {useMutation} from "@apollo/react-hooks";
import {ADD_VENDOR} from "../components/GraphQL/vendor/mutations";

const VendorSignUp = ({history}) => {

    const [step, setStep] = useState(1);
    const [vendor, setVendor] = useState({});
    const [vendorInfo, setVendorInfo] = useState({
        displayName: '',
        contactPerson: '',
        email: '',
        password: ''
    });

    const previous = () => {
        setStep(prevState => prevState - 1);
        setVendor({})
    };

    const submitVendorSignUp = useCallback(async event => {
        event.preventDefault();
        // const { email, password } = event.target.elements;
        //setUser({username: email.value, password: password.value});
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(vendorInfo.email, vendorInfo.password);
            history.push("/");

            await console.log("GraphQL Mutation goes here?");

            // vendor inneholder hele objektet fra Brreg.
            // vendorInfo inneholder resten

        } catch (error) {
            alert(error);
        }
    }, [history, vendorInfo.email, vendorInfo.password]);



    function CreateVendor() {

        const [addVendor, { data }] = useMutation(ADD_VENDOR);

            addVendor({
                variables: {
                    displayName: vendorInfo.displayName,
                    organizationNumber: Number(vendor.organisasjonsnummer),
                    address: vendor.forretningsadresse.adresse[1],
                    userEmail: vendorInfo.email
                }
            });

            console.log(data)
    }

    return (
        <div className="container">
            <h1>VENDOR SIGN UP</h1>

            { step === 1  && <FormOrgNumber vendor={vendor} setVendor={setVendor}/> }
            { step === 2  && <FormCompanyInfo vendor={vendor} vendorInfo={vendorInfo} setVendorInfo={setVendorInfo} /> }

            <div className="row">
                { step > 1 && <button onClick={previous}>Forrige</button> }
                { vendor?.navn && step === 1 && <button onClick={() => setStep(prevState => prevState + 1)}>Neste</button> }
                { step === 2 && <button onClick={submitVendorSignUp}>Ferdig</button> }
            </div>
        </div>
    )
};

export default VendorSignUp

