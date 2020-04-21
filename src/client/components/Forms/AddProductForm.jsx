import React from 'react';
import FormInput from "./FormInput";
import {Col, Row} from "react-bootstrap";
import FormSelect from "./FormSelect";
import {
    CONSTANT_BEAN_TYPES,
    CONSTANT_COUNTRIES_AFRICA, CONSTANT_COUNTRIES_AMERICA, CONSTANT_COUNTRIES_ASIA,
    CONSTANT_REGIONS,
    CONSTANT_ROAST_DEGREES
} from "../../constants/constantsFile";

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
        <div className="container newProd">
            <form className="prod-form">
                <div className="test1">
                    <Row>
                        <Col sm={12}>
                        <FormInput className="prod-input" id="ProdName" label="Produktnavn" name="productName" value={props.product.productName} placeholder="Java Supreme Dark Roast.." handleChange={handleChange}  />
                        </Col>
                    </Row>
                       <Row>
                       <Col sm={12}>
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
                        </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <FormSelect navn="Region" name="region" value={props.product.region} selectionList={CONSTANT_REGIONS} handleChange={handleChange}/>
                            </Col>
                            <Col sm={6}>
                                {props.product.region === "Afrika" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AFRICA} handleChange={handleChange}/>
                                }
                                {props.product.region === "Asia" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_ASIA} handleChange={handleChange}/>
                                }
                                {props.product.region === "Sør-Amerika" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AMERICA} handleChange={handleChange}/>
                                }
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
                        <Row>
                        <Col md={12}>
                        <FormInput className="prod-input" label="Smaksprofil" name="tasteProfile" value={props.product.tasteProfile} placeholder="Nam nam" handleChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <FormInput className="prod-input" label="Sertifisering" name="certification" value={props.product.certification} placeholder="Fair Trade.." handleChange={handleChange} />
                        </Col>
                    </Row>
                        
                </div>

            </form>
        </div>
    )
};

export default AddProductForm
