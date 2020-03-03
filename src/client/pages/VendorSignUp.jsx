import React, {useCallback, useState} from 'react';
import FormOrgNumber from "../components/Forms/FormOrgNumber";
import FormCompanyInfo from "../components/Forms/FormCompanyInfo";
import app from "../components/Firebase/firebase";

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
        } catch (error) {
            alert(error);
        }
    }, [history, vendorInfo.email, vendorInfo.password]);

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

