import React from 'react';
import FormInput from "./FormInput";
import {Col, Row} from "react-bootstrap";
import FormSelect from "./FormSelect";
import {
    CONSTANT_COUNTRIES_AFRICA, CONSTANT_COUNTRIES_AMERICA, CONSTANT_COUNTRIES_ASIA,
    CONSTANT_REGIONS,
    CONSTANT_ROAST_DEGREES,
    CONSTANT_CATEGORIES,
    CONSTANT_CERTIFICATIONS,
} from "../../constants/constantsFile";
import TextAreaInput from "./TextAreaInput";

const AddProductForm = props => {

    return (
        <div className="first-col">
            <form className="mt-3">

                    <Col className="prod-name no-gutters" >
                        <FormInput id="productName" label="Produktnavn" name="productName" value={props.product.productName} placeholder="Java Supreme Dark Roast.." handleChange={props.handleChange}  />
                        <TextAreaInput id="sale-text-input" label={'Kort beskrivelse/Salgstekst*'} handleChange={props.handleChange} product={props.product} value={props.product.descriptionShort} config={{name: 'descriptionShort', rows: '2', cols: '35', maxLength: '70', placeholder: 'Fantastisk kaffe med smak av himmel og et hint av grønne blader..'}}/>
                        <Row className="no-gutters">
                            <Col sm={6} className="control-select">
                                <FormSelect navn="Region*" name="region" value={props.product.region} selectionList={CONSTANT_REGIONS} handleChange={props.handleChange}/>

                            </Col>
                            <Col className="control-select" sm={6}>
                                {props.product.region === "Afrika" &&
                                <FormSelect navn="Land*" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AFRICA} handleChange={props.handleChange}/>
                                }
                                {props.product.region === "Asia" &&
                                <FormSelect navn="Land*" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_ASIA} handleChange={props.handleChange}/>
                                }
                                {props.product.region === "Sør-Amerika" &&
                                <FormSelect navn="Land*" name="country" value={props.product.country}
                                            selectionList={CONSTANT_COUNTRIES_AMERICA} handleChange={props.handleChange}/>
                                }
                            </Col>
                        </Row>

                        <Row className="no-gutters">
                            <Col className="control-select">
                                <FormInput label="Bønnetype*" name="beanType" value={props.product.beanType} placeholder="F.eks Cactuai" handleChange={props.handleChange}/>
                            </Col>
                            <Col>
                                <FormInput label="Elevation (moh.)" name="elevation" value={props.product.elevation} placeholder="F.eks 1.512" handleChange={props.handleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormSelect navn="Smakskategori*" name="category" value={props.product.category} selectionList={CONSTANT_CATEGORIES} handleChange={props.handleChange}/>
                            </Col>
                            <Col>
                                <FormSelect navn="Brennegrad*" name="roastDegree" value={props.product.roastDegree} selectionList={CONSTANT_ROAST_DEGREES} handleChange={props.handleChange}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormSelect navn="Sertifisering" name="certification" value={props.product.certification} selectionList={CONSTANT_CERTIFICATIONS} handleChange={props.handleChange} />
                            </Col>
                            <Col>
                                <FormInput label="Prosess" name="process" value={props.product.process} handleChange={props.handleChange} />
                            </Col>
                        </Row>
                    </Col>
            </form>
        </div>
    )
};

export default AddProductForm
