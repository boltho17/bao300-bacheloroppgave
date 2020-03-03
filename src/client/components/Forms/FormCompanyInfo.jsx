import React from 'react';
import FormInput from "./FormInput";

const FormCompanyInfo = props => {

    const handleFormSubmit = () => {
        console.log("handleFormSub")
    };

    return (
        <div>
            <h3>Steg 2</h3>
            <form className="container" onSubmit={handleFormSubmit}>

                <FormInput value={props.value} /> {/* Org Number */}

            </form>
        </div>
    )
};

export default FormCompanyInfo
