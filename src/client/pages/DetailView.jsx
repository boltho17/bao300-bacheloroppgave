import React, { useState, useEffect } from 'react';
import {TiMinus, TiPlus} from "react-icons/all";

const DetailView = (props) => {

    const [quantityAmountSelectorValue, setQuantityAmountSelectorValue] = useState(1)
    useEffect(() => {
        console.log(props)
    });

    /*
    const product = {
        country: {
            name: "Burundi"
        },
        descriptionLong: "Bryggeguide for fantastisk smak jada jada",
        descriptionShort: "Fantastisk kaffe med bla bla bbla bla bla bla bla",
        flavorProfile: "Søt og rundt med hint av jordbær",
        grindOptions: ["Ja", "Nei", "Espresso"],
        id: "ck9bkzlld01an07538ep7kvzh",
        published: true,
        title: "Jaava Latte44",
        vendor: {
            displayName: "KaffeGodt2 AS"
        }
    }
    */

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
                            <div className="productPicture" style={{backgroundImage: `url("${"https://i.pinimg.com/736x/f6/c1/86/f6c18634aade9c5b4d06e59705e56702.jpg"}")`}}></div>
                        </div>

                        <div className="col-sm custom-colsm-paddin120px">
                            <h6 className="content-custom-spaceing"><b>{props.product?.vendor?.displayName}</b></h6>
                            <h1 className="content-custom-spaceing">{props.product?.title}</h1>
                            <h6>
                                {props.product?.country?.name}/{props.product?.region}
                                </h6>
                            <p className="content-custom-spaceing">{props.product?.descriptionShort}</p>

                            <p>Størrelse</p>

                             
                            <br></br>
                            
                            <p className="content-custom-spaceing">Antall</p>
                            
                            <div className="quantity-selector">
                                <div onClick={updateQuantityMinus} className="quantity-selector-amount-minus"><TiMinus/></div>
                                <p className="quantity-selector-amount">{quantityAmountSelectorValue}</p>
                                <div onClick={updateQuantityPlus} className="quantity-selector-amount-plus"><TiPlus/></div>
                            </div>

                            <br></br>

                            {props.product?.skus?.map(sku => <div>{sku.weight}</div>)}

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
                <p>{props.product?.productName}</p>

                <div className="row">
                    <div className="col-2 mr-3 col-lg-3">
                        <div className="">
                            <p className="detaljer-box-custom"><b>Prosess</b></p>
                            <p>brewText</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Bønnetype</b></p>
                            <p>beanType</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Sertifisering</b></p>
                            <p>certification</p>
                        </div>
                    </div>

                    <div className="">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Region</b></p>
                            <p>{props.product?.region}</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2 mr-3 col-lg-3">
                        <div className="">
                            <p className="detaljer-box-custom"><b>Smaksprofil</b></p>
                            <p>{props.product?.flavorProfile}</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Brennegrad</b></p>
                            <p>roastdegree</p>
                        </div>
                    </div>

                    <div className="col-2 mr-5 col-lg-3">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Tittel</b></p>
                            <p>hvilken data?</p>
                        </div>
                    </div>

                    <div className="">
                    <div className="detaljer-box-custom">
                            <p className="detaljer-box-custom"><b>Land</b></p>
                            <p>{props.product?.country?.name}</p>
                        </div>
                    </div>
                </div>

                <h3 className="content-custom-spaceing">Litt om kaffen</h3>
                <p>{props.product?.descriptionLong}</p>
                
                <br></br>

                <div className="custom-bottomlane"></div>
                <h3>Fra samme brenneri</h3>
            </div>

            
        </div>  
    )
}

export default DetailView;