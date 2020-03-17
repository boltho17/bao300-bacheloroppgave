import React from 'react';
import FormInput from "./FormInput";

const FormCustomerInfo = props => {

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        props.setCustomer(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });

    };

    return (
        <div>
            <form className="container">

                <FormInput label="Fornavn" name="firstName" value={props.customer.firstName}
                           placeholder="Ola" handleChange={handleChange}/>
                <FormInput label="Etternavn" name="lastName" value={props.customer.lastName}
                           placeholder="Nordmann" handleChange={handleChange}/>
                <FormInput label="Adresse" name="address" value={props.customer.address}
                           placeholder="Gjøkeredet 1, 3400 Lier" handleChange={handleChange}/>
                <FormInput label="Epost" name="email" value={props.customer.email} placeholder="ola@nordmann.no"
                           handleChange={handleChange}/>
                <FormInput label="Passord" name="password" type="password" value={props.customer.password}
                           placeholder="Minst 6 tegn" handleChange={handleChange}/>

            </form>
        </div>
    )
};

export default FormCustomerInfo
