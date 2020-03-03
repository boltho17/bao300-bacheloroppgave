import React, {useState} from 'react';
import FormOrgNumber from "../components/Forms/FormOrgNumber";
import FormCompanyInfo from "../components/Forms/FormCompanyInfo";

const VendorSignUp = () => {

    const [step, setStep] = useState(1);

    return (
        <div className="container">
            <h1>VENDOR SIGN UP</h1>

            { step === 1  && <FormOrgNumber/> }
            { step === 2  && <FormCompanyInfo /> }
            { step === 3  && <FormOrgNumber/> }

            <div className="row">
                { step > 1 && <button onClick={() => setStep(prevState => prevState - 1)}>Forrige</button> }
                <button onClick={() => setStep(2)}>Neste</button>
            </div>
        </div>
    )
};

export default VendorSignUp

