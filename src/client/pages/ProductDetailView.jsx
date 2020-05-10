import React, { useState, useEffect } from 'react';
import {TiMinus, TiPlus} from "react-icons/all";
import {Redirect} from "react-router-dom";
import RecommendedProducts from '../components/RecommendedProducts'

const ProductDetailView = ({products, product, onSelect}) => {

    const [quantityAmountSelectorValue, setQuantityAmountSelectorValue] = useState(1);
    const [redirect, setRedirect] = useState(false);
    // eslint-disable-next-line
    const [vendorProducts, setVendorProducts] = useState(products?.filter(item => item.vendor?.displayName === product?.vendor?.displayName && item.title !== product.title));

    // Printer ut produkt objektet man har valgt i Nettbutikk, navigerer tilbake til produktoversikt hvis ingen produkt er valgt.
    useEffect(() => {
        if(product === undefined) {
            setRedirect(true)
        }
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const updateQuantityPlus = () => {
        setQuantityAmountSelectorValue(quantityAmountSelectorValue + 1)
    }

    const updateQuantityMinus = () => {
        if(quantityAmountSelectorValue > 1) {
            setQuantityAmountSelectorValue(quantityAmountSelectorValue - 1)
        }
    }

    const test = product?.skus?.map((elem, index) => {
        return (
            <div className="amount-btn-container-nomarked" key={index}>
                <p>{elem.weight} g</p>
                <p className="størrelse-bottom-price">{elem.price} kr</p>
            </div>
        )
    })

    if(redirect) {
        return <Redirect to='/products' />;
    } else {
        return (
            <div>

                <div className="container containerProductTop">
                    <div className="row">
                        <div className="col-sm">
                            <img alt="kaffe" className="productPicture" src={product?.productImages[0] || "https://i.pinimg.com/736x/f6/c1/86/f6c18634aade9c5b4d06e59705e56702.jpg"}/>
                        </div>

                        <div className="col-sm custom-colsm-paddin120px">
                            <h6 className="content-custom-spaceing"><b>{product?.vendor?.displayName}</b></h6>
                            <h1 className="content-custom-spaceing">{product?.title}</h1>
                            <h6>
                                {product?.country?.name}/{product?.country?.region?.name}
                            </h6>
                            <p className="content-custom-spaceing">{product?.descriptionShort}</p>

                            <p>Størrelse</p>

                            <div className="row">
                                {test}
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
                    <p>{product?.productName}</p>

                    <div className="row">
                        <div className="col-2 mr-3 col-lg-3">
                            <div className="">
                                <p className="detaljer-box-custom"><b>Prosess</b></p>
                                <p>{product?.process}</p>
                            </div>
                        </div>

                        <div className="col-2 mr-5 col-lg-3">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b>Bønnetype</b></p>
                                <p>{product?.beanType}</p>
                            </div>
                        </div>

                        <div className="col-2 mr-5 col-lg-3">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b>Sertifisering</b></p>
                                <p>{product?.certification}</p>
                            </div>
                        </div>

                        <div className="">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b>Region</b></p>
                                <p>{product?.country?.region?.name}</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-2 mr-3 col-lg-3">
                            <div className="">
                                <p className="detaljer-box-custom"><b>Elevation</b></p>
                                <p>{product?.elevation} moh.</p>
                            </div>
                        </div>

                        <div className="col-2 mr-5 col-lg-3">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b>Brennegrad</b></p>
                                <p>{product?.roastDegree}</p>
                            </div>
                        </div>

                        <div className="col-2 mr-5 col-lg-3">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b></b></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="">
                            <div className="detaljer-box-custom">
                                <p className="detaljer-box-custom"><b></b></p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <h3 className="content-custom-spaceing">Litt om kaffen</h3>
                    <p>{product?.descriptionLong}</p>

                    <br></br>

                    <div className="custom-bottomlane"></div>
                    <h3>Fra samme brenneri</h3>

                    <RecommendedProducts products={vendorProducts} onSelect={onSelect}/>
                    <br></br>
                </div>


            </div>
        )
    }
}

export default ProductDetailView;
