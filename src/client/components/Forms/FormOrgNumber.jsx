import React, {useState} from 'react';
import FormInput from "./FormInput";
import {Row} from "react-bootstrap";

const FormOrgNumber = props => {

    // State
    const [orgNumber, setOrgNumber] = useState('');
    const [showSearchButton, setShowSearchButton] = useState(true)

    const handleChange = event => {
        setOrgNumber(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(orgNumber.length === 9) {
            setShowSearchButton(false);
        }
        fetchData();
        // console.log(orgNumber);
    };

    const fetchData = async () => {
        if(orgNumber) {
            const result = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgNumber}`);
            result
                .json()
                .then(result => props.setVendor(result))
                .catch(err => console.log('fetch error',err))
                //.finally(() => console.log(props.vendor));
                //.finally(() => props.setVendorInfo({displayName: props.vendor.navn}));
        }
        else {
            console.log("Vennligst skriv inn et org nummer")
        }
    };

    return (
        <div className="step1-cont">
            <h4>Angi organisasjonsnummer</h4>
            <p className="eksempel">F.eks 913571398</p>
            <form className="container">

                <Row className="reg-form1">
                    <FormInput label="Organisasjonsnummer" value={orgNumber} handleChange={handleChange} placeholder={"Org.nummer"} /> {/* Org Number */}
                    { showSearchButton && <button className="vend-reg-btn" onClick={handleFormSubmit}>Fortsett</button> }
                </Row>
                <div className="reg-form1 extrainfo">  
                    { props.vendor?.navn && <FormInput label="Firmanavn" placeholder={props.vendor.navn} disabled={true} /> /* Org Number */}
                    { props.vendor?.forretningsadresse?.adresse[1] && <FormInput label="Adresse" placeholder={props.vendor.forretningsadresse.adresse[1]} disabled={true} /> }
                    { props.vendor?.forretningsadresse?.poststed && <FormInput label="Poststed" placeholder={props.vendor.forretningsadresse.poststed} disabled={true} /> /* Org Number */}
                </div>  
            </form>
        </div>
    )
};

export default FormOrgNumber
