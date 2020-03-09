import React from 'react';
import FormInput from "./FormInput";
import {Col, Row} from "react-bootstrap";
import FormSelect from "./FormSelect";
import {CONSTANT_BEAN_TYPES, CONSTANT_COUNTRIES, CONSTANT_REGIONS, CONSTANT_ROAST_DEGREES} from "../../constants/constantsFile";

const AddProductForm = props => {

    const handleChange = event => {
        const target = event.target;
        let value = target.value;
        let name = target.name;

        // For the select options:
        let options = event.target.options;
        if(options) {
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value = options[i].value;
                    name = target.id;
                }
            }
        }

        props.setProduct(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });

    };

    return (
        <div>
            <h1>Opprett et nytt produkt</h1>
            <form className="container-fluid">

                <div>
                    <Col sm={6}>
                        <FormInput label="Navn" name="productName" value={props.product.productName} placeholder="Java Supreme Dark Roast.." handleChange={handleChange}  />
                        <label>Salgstekst</label>
                        <br/>
                        <textarea
                            name="saleText"
                            rows="2"
                            cols="35"
                            maxLength="70"
                            value={props.product.saleText}
                            placeholder="Fantastisk kaffe med smak av himmel og et hint av grønne blader.."
                            onChange={handleChange}
                        />
                        <Row>
                            <Col sm={6}>
                                <FormSelect navn="Region" name="region" value={props.product.region} selectionList={CONSTANT_REGIONS} handleChange={handleChange}/>
                            </Col>
                            <Col sm={6}>
                                <FormSelect navn="Land" name="country" value={props.product.country} selectionList={CONSTANT_COUNTRIES} handleChange={handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <FormSelect navn="Bønnetype" name="beanType" value={props.product.beanType} selectionList={CONSTANT_BEAN_TYPES} handleChange={handleChange}/>
                            </Col>
                            <Col sm={6}>
                                <FormSelect navn="Brennegrad" name="roastDegree" value={props.product.roastDegree} selectionList={CONSTANT_ROAST_DEGREES} handleChange={handleChange}/>
                            </Col>
                        </Row>
                        <FormInput label="Smaksprofil" name="tasteProfile" value={props.product.tasteProfile} placeholder="Nam nam" handleChange={handleChange} />
                        <FormInput label="Sertifisering" name="certification" value={props.product.certification} placeholder="Fair Trade.." handleChange={handleChange} />
                    </Col>
                </div>

            </form>
        </div>
    )
};

export default AddProductForm
