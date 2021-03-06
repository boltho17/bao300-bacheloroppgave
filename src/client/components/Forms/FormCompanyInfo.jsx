import React from 'react';
import FormInput from "./FormInput";
import {Col, Row} from "react-bootstrap";

const FormCompanyInfo = props => {

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        props.setVendorInfo(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });

    };

    return (
        <div className="step2-cont">
            <form className="container">
                <Row className="step2-cont"> 
                    <Col className="reg-form1 step2">
                        <h4 className="vendor-sign-up-title">Info fra Brønnøysund Register</h4>
                        <FormInput label="Organisasjonsnummer" placeholder={props.vendor.organisasjonsnummer} disabled={true} />
                        <FormInput label="Firmanavn" placeholder={props.vendor.navn} disabled={true} />
                        <FormInput label="Adresse" placeholder={props.vendor.forretningsadresse.adresse[1]} disabled={true} />
                        <FormInput label="Poststed" placeholder={props.vendor.forretningsadresse.poststed} disabled={true} />
                    </Col>

                    <Col className="reg-form1 step2">
                        <h4 className="vendor-sign-up-title">Angi ekstra informasjon</h4>
                        <FormInput label="Visningsnavn" name="displayName" value={props.vendorInfo.displayName} handleChange={handleChange}  />
                        <FormInput label="Kontaktperson" name="contactPerson" value={props.vendorInfo.contactPerson} placeholder="Ola Nordmann" handleChange={handleChange} />
                        <FormInput label="Epost" name="email" value={props.vendorInfo.email} placeholder="ola@kaffeslottet.no" handleChange={handleChange} />
                        <FormInput label="Passord" name="password" type="password" value={props.vendorInfo.password} placeholder="Minst 6 tegn" handleChange={handleChange} />
                    </Col>
                </Row>

            </form>
        </div>
    )
};

export default FormCompanyInfo
