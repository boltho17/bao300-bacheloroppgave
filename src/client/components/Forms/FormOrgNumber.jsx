import React, {useState} from 'react';
import FormInput from "./FormInput";
import {Row} from "react-bootstrap";

const FormOrgNumber = props => {

    // State
    const [orgNumber, setOrgNumber] = useState('');

    const handleChange = event => {
        setOrgNumber(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
        console.log(orgNumber);
    };

    const fetchData = async () => {
        if(orgNumber) {
            const result = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgNumber}`);
            result
                .json()
                .then(result => props.setVendor(result))
                .catch(err => console.log('fetch error',err))
                .finally(() => console.log(props.vendor));
        }
        else {
            console.log("Vennligst skriv inn et org nummer")
        }
    };

    return (
        <div>
            <h3>Steg 1</h3>
            <form className="container">

                <Row>
                    <FormInput label="F.eks 913571398" value={orgNumber} handleChange={handleChange} placeholder={"Org.nummer"} /> {/* Org Number */}
                    <button onClick={handleFormSubmit}>Søk</button>
                </Row>
                    { props.vendor?.navn && <FormInput label="Firmanavn" placeholder={props.vendor.navn} disabled={true} /> /* Org Number */}
                    { props.vendor?.forretningsadresse?.adresse[1] && <FormInput label="Adresse" placeholder={props.vendor.forretningsadresse.adresse[1]} disabled={true} /> }
                    { props.vendor?.forretningsadresse?.poststed && <FormInput label="Poststed" placeholder={props.vendor.forretningsadresse.poststed} disabled={true} /> /* Org Number */}
            </form>
        </div>
    )
};

export default FormOrgNumber
