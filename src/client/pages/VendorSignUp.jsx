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
            { step === 3  && <div>Her kommer steg 3 component</div> }

            <div className="row">
                { step > 1 && <button onClick={() => setStep(prevState => prevState - 1)}>Forrige</button> }
                { step < 3 && <button onClick={() => setStep(prevState => prevState + 1)}>Neste</button> }
                { step === 3 && <button onClick={() => console.log("Ferdig")}>Ferdig</button> }
            </div>
        </div>
    )
};

export default VendorSignUp

