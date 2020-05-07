import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";

const VendorDetailView = ({vendor}) => {

    const [redirect, setRedirect] = useState(false);

    // Navigerer tilbake til selger oversikt hvis ingen selger er valgt.
    useEffect(() => {
        console.log(vendor);
        
        if (vendor === undefined) {
            setRedirect(true)
        }
    }, [vendor]);

    if (redirect) {
        return <Redirect to='/vendors'/>;
    } else {
        return (
            <div>
                <div className="conteiner containerProductTop">
                    <div className="row">
                        <div className="col-sm">
                            <div className="vendorProductPicture" style={{backgroundImage: `url("${"https://i.vimeocdn.com/portrait/9853084_640x640"}")`}}/>
                        </div>
                   
                        <div className="col-sm vendor-detail-view-right-content">
                            <h3>{vendor?.displayName}</h3>

                            <h5 className="content-custom-spaceing">Adresse:</h5>
                            <p>{vendor?.address}</p>
                            <p>{vendor?.city}</p>

                            <h5>Kontaktinfo:</h5>
                            <p>(47+) 902 92 929</p>
                            <p>{vendor?.user.email}</p>

                            <h5>Beskrivelse av bedriften:</h5>
                            <p>We are known for our light-roasted coffees with consistent quality, yet the secret behind the quality of our coffees is not just the way we roast and our strict quality control, but also the way we buy our green coffee. All our coffees are carefully sourced from our favourite origins based on a philosophy where quality, traceability, innovation and social responsibility is the main focus. We like to have close relations with the producers we buy from. Together we work systematically both short and long term in order to improve the quality of their coffees. We roast to order every week and ship our coffees to home enthusiasts, offices, restaurants and coffee shops all over the world. You can also get our coffees in our espressobar in Grünersgate 1 in Oslo. Our roastery and office are located at Tøyengata 29c, just a short walk from our espresso bar.</p>

                            <div className="row">

                            <div className="col-sm cutsom-padding-on-picture-vendor">
                            <div className="vendorBusinessPicture" style={{backgroundImage: `url("${"https://en.goodcoffee.me/cms/wp-content/uploads/Tim-Wendelboe-Oslo-1.jpg"}")`}}/>
                        </div>
                        <div className="col-sm">
                            <div className="vendorBusinessPicture" style={{backgroundImage: `url("${"https://mk0europeancoffmnbn2.kinstacdn.com/wp-content/uploads/2018/09/IMG_0569.jpg"}")`}}/>
                        </div>
                        <div className="col-sm">
                            <div className="vendorBusinessPicture" style={{backgroundImage: `url("${"https://331mrnu3ylm2k3db3s1xd1hg-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/Sprudge-Tim-Wendelboe-Joanna-Han-03.jpg"}")`}}/>
                        </div>
                            </div>
                            <h3>Handle kaffe fra denne leverandøren ></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default VendorDetailView;
