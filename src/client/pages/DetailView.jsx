import React, { useState } from 'react';
import {TiMinus, TiPlus} from "react-icons/all";

const DetailView = ({product}) => {

    product = {
        vendor: "Super Duper Kaffe AS",
        productName: "Tobys speciale",
        descriptionShort: "Fantastisk kaffe med smak av himmel og et hint av grønne blader.. Mange andre bønner og gode snacks er tillat",
        descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        region: "Asia",
        country: "Vietnam",
        beanType: "Arabica",
        roastDegree: "Lys/Medium",
        tasteProfile: "Sursøt",
        certification: "Fair Trade",
        brewText: "Delevis bæretørket",
        priceOptions: [
            {grams0: "1337", price0: "299"},
            {grams1: "111", price1: "399"},
            {grams2: "222", price2: "499"},
        ],
        grinded: true,
        publishedStatus: true,
        grindOptions: ["Espressokanne", "Filtermalt", "Chemex"],
        pictures: ["https://i.pinimg.com/736x/f6/c1/86/f6c18634aade9c5b4d06e59705e56702.jpg", 
        "https://10619-2.s.cdn12.com/rests/original/320_506852401.jpg"],
    };
    
    const [quantityAmountSelectorValue, setQuantityAmountSelectorValue] = useState(1)

    const updateQuantityPlus = () => {
        setQuantityAmountSelectorValue(quantityAmountSelectorValue + 1)
    }

    const updateQuantityMinus = () => {
        if(quantityAmountSelectorValue > 1) {
        setQuantityAmountSelectorValue(quantityAmountSelectorValue - 1)
        }
    }

    return (
        <div>
            
            <div className="container containerProductTop">
                <div className="row">
                        <div className="col-sm">
                            <div className="productPicture" style={{backgroundImage: `url("${product.pictures[0]}")`}}></div>
                        </div>

                        <div className="col-sm custom-colsm-paddin120px">
                            <h6 className="content-custom-spaceing"><b>{product.vendor}</b></h6>
                            <h1 className="content-custom-spaceing">{product.productName}</h1>
                            <h8><i>{product.country}/{product.region}</i></h8>
                            <p className="content-custom-spaceing">{product.descriptionShort}</p>

                            <p>Størrelse</p>

                                <div className="row">
                                    <div className="mr-2 ml-3 ml-md-3">
                                        <div className="amount-btn-container-marked">
                                            <div className="price-gram-wrapper">
                                                <p className="custom-text-wrapper-gram-price">{product.priceOptions[0].grams0} g</p>
                                                <b><p className="custom-text-wrapper-gram-price">{product.priceOptions[0].price0}kr</p></b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mr-2">
                                        <div className="amount-btn-container-nomarked">
                                            <p className="custom-text-wrapper-gram-price">{product.priceOptions[1].grams1} g</p>
                                            <b><p className="custom-text-wrapper-gram-price">{product.priceOptions[1].price1}kr</p></b>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="amount-btn-container-nomarked">
                                            <p className="custom-text-wrapper-gram-price">{product.priceOptions[2].grams2} g</p>
                                            <b><p className="custom-text-wrapper-gram-price">{product.priceOptions[2].price2}kr</p></b>
                                        </div>
                                    </div>
                                </div>
                            
                            <br></br>
                            
                            <p className="content-custom-spaceing">Antall</p>
                            
                            <div className="quantity-selector">
                                <div onClick={updateQuantityMinus} className="quantity-selector-amount-minus"><TiMinus/></div>
                                <p className="quantity-selector-amount">{quantityAmountSelectorValue}</p>
                                <div onClick={updateQuantityPlus} className="quantity-selector-amount-plus"><TiPlus/></div>
                            </div>

                            <br></br>

                            <p className="content-custom-spaceing">Malingsgrad</p>

                            <div className="row">
                                <div className="">
                                    <div className="malingsgrad-marked">
                                        <p>Hele bønner</p>
                                    </div>

                                </div>
                                
                                <div className="malingsgrad-nomarked">
                                        <p>Malt</p>
                                </div>
                            </div>

                            <div className="addtocart-button"><p>LEGG I HANDLEKURV</p></div>
                        </div>

                </div>
            </div>
            
            
            <div className="container">
            
                <h1>Detaljer</h1>
                <div className="custom-toplane"></div>
                <p>{product.productName}</p>

                <div className="row">
                    <div className="col-2 mr-3 col-lg-3">
                        <div className="">
                            <p className="detaljer-box-custom"><b>Prosess</b></p>
                            <p>{product.brewText}</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Bønnetype</b></p>
                            <p>{product.beanType}</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Sertifisering</b></p>
                            <p>{product.certification}</p>
                        </div>
                    </div>

                    <div className="">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Region</b></p>
                            <p>{product.region}</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 mr-3 col-lg-3">
                        <div className="">
                            <p className="detaljer-box-custom"><b>Smaksprofil</b></p>
                            <p>{product.tasteProfile}</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Brennegrad</b></p>
                            <p>{product.roastDegree}</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Tittel</b></p>
                            <p>{product.certification}</p>
                        </div>
                    </div>

                    <div className="">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Land</b></p>
                            <p>{product.country}</p>
                        </div>
                    </div>
                </div>

                <h3 className="content-custom-spaceing">Litt om kaffen</h3>
                <p>{product.descriptionLong}</p>
                
                <br></br>

                <div className="custom-bottomlane"></div>
                <h3>Fra samme brenneri</h3>
            </div>

        </div>  
    )
}

export default DetailView;