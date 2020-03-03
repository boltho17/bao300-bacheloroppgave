import React, {useState} from 'react';
import FormInput from "./FormInput";
import {Row} from "react-bootstrap";

const FormOrgNumber = props => {

    // State
    const [orgNumber, setOrgNumber] = useState('');
    const [company, setCompany] = useState({});


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
                .then(result => setCompany(result))
                .catch(err => console.log('fetch error',err))
                .finally(() => console.log(company));
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
                    <FormInput value={orgNumber} handleChange={handleChange} placeholder={"Org.nummer"} /> {/* Org Number */}
                    <button onClick={handleFormSubmit}>Søk</button>
                </Row>

                    { company?.navn && <FormInput placeholder={company.navn} /> /* Org Number */}
                    { company?.forretningsadresse?.adresse[1] && <FormInput placeholder={company.forretningsadresse.adresse[1]} /> }
                    { company?.forretningsadresse?.poststed && <FormInput placeholder={company.forretningsadresse.poststed} /> /* Org Number */}

            </form>
        </div>
    )
};

export default FormOrgNumber
