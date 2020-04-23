import React, {useContext, useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT} from "../components/GraphQL/product/mutations";
import {AuthContext} from "../components/Firebase/AuthContext";
import ImageUpload from "../components/AddProduct/ImageUpload";
import TextAreaInput from "../components/Forms/TextAreaInput";

const AddProduct = () => {

    // Access the vendor object globally from AuthContext:
    let signedInVendor = useContext(AuthContext)?.vendor;

    // GraphQL mutation to add product to DB:
    const [addProduct, {productData}] = useMutation(ADD_PRODUCT);

    const initialState = {
        productName: "",
        descriptionShort: "Fantastisk kaffe med smak av himmel og et hint av grønne blader..",
        descriptionLong: "",
        region: "Velg..",
        country: "Velg..",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        brewText: "",
        priceOptions: [
            {grams0: null, price0: null},
            {grams1: null, price1: null},
            {grams2: null, price2: null},
        ],
        grinded: true,
        publishedStatus: true,
        grindOptions: [],
        pictures: [],
        test: ""
    };

    const [product, setProduct] = useState(initialState);
    const [error, setError] = useState({
        productNameError: true,
        priceOptionsError: true
    })

    const handleChange = event => {
        const target = event.target;
        let value = target.value;
        let name = target.name;

        // For the select options:
        let options = event.target.options;
        if (options) {
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value = options[i].value;
                    name = target.id;
                }
            }
        }

        setProduct(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    /* HandleChange for checkboxes hvis det skal puttes inn i et objekt
    const handleCheckBoxChange = event => {
        const item = event.target.name;
        const isChecked = event.target.checked;

        setProduct(prevState => {
            return {
                ...prevState, // Beholder previous values i hele state objektet
                grindOptions: [
                    //...prevState.grindOptions,
                    {
                        ...prevState.grindOptions[0],
                        [item]: isChecked
                    }
                ]
            }
        })
    }
     */

    // HandleChange for checkboxes hvis det skal leses inn i et array som Strings.
    const handleCheckBoxChange = event => {
        const item = event.target.name;
        const isChecked = event.target.checked;

        if(isChecked) {
            setProduct(prevValue => {
                return {
                    ...prevValue, // Beholder previous values i hele state objektet
                    grindOptions: [
                        ...prevValue.grindOptions, item // Legger til selected item i grindOptions array
                    ]
                };
            });
        }
        if(!isChecked) {
            setProduct(prevValue => {
                return {
                    ...prevValue, // Beholder previous values i hele state objektet
                    grindOptions: [
                        ...prevValue.grindOptions.filter(element => element !== item) // Fjerner selected item fra grindOption array
                    ]
                };
            });
        }
    }

    const getSkus = () => {
        if (product.priceOptions[2].grams2 && product.priceOptions[2].price2) {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0},
                {weight: product.priceOptions[1].grams1, price: product.priceOptions[1].price1},
                {weight: product.priceOptions[2].grams2, price: product.priceOptions[2].price2}
            ]
        } else if (product.priceOptions[1].grams1 && product.priceOptions[1].price1) {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0},
                {weight: product.priceOptions[1].grams1, price: product.priceOptions[1].price0}
            ]
        } else {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0}
            ]
        }
    };


    // OPPRETTER PRODUCT I DB:
    const onSubmit = () => {
        console.log(product);

        if (product.region === "Velg.." && product.country === "Velg..") {
            console.log("Ikke lagret! Vennligst fyll inn alle obligatoriske felt!");
        }
        if (product.productName === '') {
            setError(prevValue => {
                return {
                    ...prevValue, // Beholder previous values i hele state objektet
                    productNameError: true
                };
            });
            alert('Vennligst fyll inn et Produktnavn');
        }
        if (product.priceOptions[0].grams0 === null || product.priceOptions[0].price0 === null) {
            setError({priceOptionsError: true})
            alert('Vennligst skriv inn riktig vekt og pris!');
        } else {
            console.log(productData);
            alert('Lagret');
            addProduct({
                variables: {
                    title: product.productName,
                    descriptionShort: product.descriptionShort,
                    descriptionLong: product.descriptionLong,
                    brewText: product.brewText,
                    flavorProfile: product.tasteProfile,
                    id: signedInVendor.id,
                    published: product.publishedStatus,
                    region: product.region,
                    countryName: product.country,
                    grindOptions: product.grindOptions,
                    skus: getSkus(),
                }
            });
            setProduct(initialState);
            //setRedirect(true)
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Opprett et nytt produkt</h1>
            <Row>
                <Col sm={6}>
                    <AddProductForm product={product} setProduct={setProduct} handleChange={handleChange}/>
                </Col>
                <Col sm={3}>
                    <CheckBoxes title={'Hele Bønner'} labels={['Ja', 'Nei']} inLine={true}
                                handleChange={handleCheckBoxChange}/>
                </Col>
                <Col sm={3}>
                    <CheckBoxes title={'Kverningsgrader'}
                                labels={['Espressomaskin', 'Espressokanne', 'Aeropress', 'DryppV60', 'Filtermalt', 'Presskanne', 'Chemex', 'Kokmalt']}
                                inLine={false} handleChange={handleCheckBoxChange}/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Price product={product} setProduct={setProduct} priceOptions={product.priceOptions} error={error}
                           setError={setError}/>
                </Col>
                <Col sm={6}>
                    <TextAreaInput label={'Bryggeritips'} handleChange={handleChange} product={product}
                                   value={product.brewText} config={{
                        name: 'brewText',
                        rows: '5',
                        cols: '50',
                        maxLength: '70',
                        placeholder: 'Bryggeritips her..'
                    }}/>
                </Col>
            </Row>
            <TextAreaInput label={'Beskrivelse'} handleChange={handleChange} product={product}
                           value={product.descriptionLong} config={{
                name: 'descriptionLong',
                rows: '5',
                cols: '50',
                maxLength: '70',
                placeholder: 'Beskrivelse her..'
            }}/>
            <ImageUpload product={product} setProduct={setProduct}/>
            <button onClick={onSubmit}>Opprett produkt</button>
        </div>
    );
};

export default AddProduct

