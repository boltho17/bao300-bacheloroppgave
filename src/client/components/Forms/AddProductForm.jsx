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
import TextAreaInput from "./TextAreaInput";

const AddProductForm = props => {

    return (
        <div className="first-col">
            <form className="mt-3">
                    <Col className="prod-name no-gutters" > 
                        <FormInput id="productName" label="Produktnavn" name="productName" value={props.product.productName} placeholder="Java Supreme Dark Roast.." handleChange={props.handleChange}  />
                        <TextAreaInput id="sale-text-input" label={'Salgstekst'} handleChange={props.handleChange} product={props.product} value={props.product.descriptionShort} config={{name: 'descriptionShort', rows: '2', maxLength: '70', placeholder: 'Fantastisk kaffe med smak av himmel og et hint av grønne blader..'}}/> 
                        <Row className="no-gutters justify-content-between">
                            <Col sm={5} className="control-select">
                                <FormSelect navn="Region" name="region" value={props.product.region} selectionList={CONSTANT_REGIONS} handleChange={props.handleChange}/>
                            </Col>
                            <Col className="control-select" sm={5}>
                                {props.product.region === "Afrika" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AFRICA} handleChange={props.handleChange}/>
                                }
                                {props.product.region === "Asia" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_ASIA} handleChange={props.handleChange}/>
                                }
                                {props.product.region === "Sør-Amerika" &&
                                <FormSelect navn="Land" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AMERICA} handleChange={props.handleChange}/>
                                }
                            </Col>
                        </Row>
                        <Row className="no-gutters justify-content-between">
                            <Col sm={5} className="control-select">
                                <FormSelect navn="Bønnetype" name="beanType" value={props.product.beanType} selectionList={CONSTANT_BEAN_TYPES} handleChange={props.handleChange}/>
                            </Col>
                            <Col sm={5}>
                                <FormSelect navn="Brennegrad"  name="roastDegree" value={props.product.roastDegree} selectionList={CONSTANT_ROAST_DEGREES} handleChange={props.handleChange}/>
                            </Col>
                        </Row>
                        <FormInput label="Smaksprofil" name="tasteProfile" value={props.product.tasteProfile} placeholder="Nam nam" handleChange={props.handleChange} />
                        <FormInput label="Sertifisering" name="certification" value={props.product.certification} placeholder="Fair Trade.." handleChange={props.handleChange} />
                    </Col>
            </form>
        </div>
    )
};

export default AddProductForm
