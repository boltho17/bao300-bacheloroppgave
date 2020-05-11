import React, {useContext, useState} from 'react';
import Container from 'react-bootstrap/Container'
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT} from "../components/GraphQL/product/mutations";
import {AuthContext} from "../components/Firebase/AuthContext";
import ImageUpload from "../components/ImageUpload";
import TextAreaInput from "../components/Forms/TextAreaInput";
import uniqid from 'uniqid';

const AddProduct = () => {

    // Access the vendor object globally from AuthContext:
    let signedInVendor = useContext(AuthContext)?.vendor;

    // FIREBASE STORAGE:
    let storage = useContext(AuthContext)?.storage;
    let storageRef = useContext(AuthContext)?.storageRef;

    // eslint-disable-next-line
    const [imageAsObject, setImageAsObject] = useState('')
    // eslint-disable-next-line
    const [imageAsUrl, setImageAsUrl] = useState()


    // GraphQL mutation to add product to DB:
    // eslint-disable-next-line
    const [addProduct, {productData}] = useMutation(ADD_PRODUCT);

    const initialState = {
        productName: "",
        descriptionShort: "Fantastisk kaffe med smak av himmel og et hint av grønne blader..",
        descriptionLong: "",
        region: "Velg..",
        country: "Velg..",
        beanType: "",
        elevation: "",
        category: "",
        roastDegree: "",
        certification: "",
        process: "",
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
        imageUrls: [],
    };

    const [product, setProduct] = useState(initialState);
    const [error, setError] = useState({
        productNameError: true,
        priceOptionsError: true
    })

    // Lagrer opplastede bilder fra product state til Firebase Storage, blir kalt på når man oppretter produkt.
    const handleFireBaseUpload = imagesAsObjects => {
        // eslint-disable-next-line
        imagesAsObjects.map(imageAsObject => {
            if (!imageAsObject.file) {
                console.error(`not an image, the image file is a ${typeof (imageAsObject.file)}`)
            }
            let uniq = uniqid()
            // const uploadTask = storage.ref.child(`images/${imageAsObject.file.name}`).put(imageAsObject.file)
            const uploadTask = storageRef.child(`images/${uniq + '_' + imageAsObject.file.name}`).put(imageAsObject.file)
            //initiates the firebase side uploading
            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    storage.ref('images').child(imageAsObject.file.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            setProduct(prevObject => ({...prevObject, imageUrls: [...prevObject.imageUrls, fireBaseUrl]}))
                        })
                })
        })
        alert("Bilde lagret!")
    }

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

        if (isChecked) {
            setProduct(prevValue => {
                return {
                    ...prevValue, // Beholder previous values i hele state objektet
                    grindOptions: [
                        ...prevValue.grindOptions, item // Legger til selected item i grindOptions array
                    ]
                };
            });
        }
        if (!isChecked) {
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
        console.log(product)
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
            alert('Lagret');
            addProduct({
                variables: {
                    id: signedInVendor.id,
                    title: product.productName,
                    descriptionShort: product.descriptionShort,
                    descriptionLong: product.descriptionLong,
                    brewText: product.brewText,
                    beanType: product.beanType,
                    elevation: product.elevation,
                    category: product.category,
                    roastDegree: product.roastDegree,
                    certification: product.certification,
                    process: product.process,
                    published: product.publishedStatus,
                    region: product.region,
                    countryName: product.country,
                    grindOptions: product.grindOptions,
                    skus: getSkus(),
                    productImages: product.imageUrls
                }
            });
            setProduct(initialState);
            //setRedirect(true)
        }
    };

    return (
        <Container fluid="md">
            <h1 className="mt-4 ml-3">Opprett et nytt produkt</h1>
            <Row className="no-gutters upper-container">
                <Col sm={6}>
                    <AddProductForm product={product} setProduct={setProduct} handleChange={handleChange}/>
                </Col>
                <Col sm={3} className="beans-cont">
                    <CheckBoxes title={'Hele Bønner'}
                                labels={['Ja', 'Nei']}
                                inLine={false}
                                handleChange={handleCheckBoxChange}/>
                </Col>
                <Col sm={3} className="grind-cont">
                    <CheckBoxes title={'Kverningsgrader'}
                                labels={['Espressomaskin', 'Espressokanne', 'Aeropress', 'DryppV60', 'Filtermalt', 'Presskanne', 'Chemex', 'Kokmalt']}
                                inLine={false} handleChange={handleCheckBoxChange}/>
                </Col>
            </Row>
            <Row className="no-gutters lower-container">
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
                        maxLength: '500',
                        placeholder: 'Bryggeritips her..'
                    }}/>
                </Col>
            </Row>
            <TextAreaInput className="description-container" label={'Beskrivelse'} handleChange={handleChange}
                           product={product}
                           value={product.descriptionLong} config={{
                name: 'descriptionLong',
                rows: '5',
                cols: '50',
                maxLength: '1000',
                placeholder: 'Beskrivelse her..'
            }}/>
            <ImageUpload product={product} setProduct={setProduct} handleUpload={handleFireBaseUpload}/>
            <button className="save-prod-btn" onClick={() => {
                onSubmit();
                //handleFireBaseUpload(product.pictures)
            }}>Opprett produkt
            </button>
        </Container>
    );
};

export default AddProduct

