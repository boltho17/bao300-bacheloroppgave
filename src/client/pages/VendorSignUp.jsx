import React, {useCallback, useEffect, useState} from 'react';
import  { Redirect } from 'react-router-dom'
import app from "../components/Firebase/firebase";
import FormOrgNumber from "../components/Forms/FormOrgNumber";
import FormCompanyInfo from "../components/Forms/FormCompanyInfo";
import {useMutation} from "@apollo/react-hooks";
import {ADD_VENDOR} from "../components/GraphQL/vendor/mutations";
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes'
const uniqid = require('uniqid');


const VendorSignUp = (props) => {

    const [isFirebaseUserCreated, setIsFirebaseUserCreated] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [addVendor, {vendorData}] = useMutation(ADD_VENDOR);
    const [step, setStep] = useState(1);
    const [vendor, setVendor] = useState({});
    const [vendorInfo, setVendorInfo] = useState({
        displayName: "",
        contactPerson: '',
        email: "",
        password: ''
    });


    // SETTER VISNINGSNAVN TIL VERDIEN AV FIRMA NAVN
    useEffect(() => {
        //console.log(props)
        if(vendor.navn) {
            setVendorInfo(prevValue => {
                return {
                    ...prevValue,
                displayName: vendor.navn
                };
            });
        }
    }, [vendor]);

    // OPPRETTER VENDOR I DB:
    useEffect( () => {
        if (isFirebaseUserCreated) {
             addVendor({
                variables: {
                    displayName: vendorInfo.displayName,
                    organizationNumber: Number(vendor.organisasjonsnummer),
                    address: vendor.forretningsadresse.adresse[1] || "Ingen registrert adresse",
                    city: vendor.forretningsadresse.kommune || "Ingen registrert poststed",
                    contactPerson: vendorInfo.contactPerson,
                    userEmail: vendorInfo.email,
                    stripeId: uniqid(),
                }
            });
            console.log(vendorData);
            // Callback from Navigation, sets reload state as true:
            props.location.param(true);
            // ----
            setRedirect(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isFirebaseUserCreated]);

    const previous = () => {
        setStep(prevState => prevState - 1);
        setVendor({})
    };


    // OPPRETTER BRUKER I FIREBASE:
    const submitVendorSignUp = useCallback(async event => {
        event.preventDefault();
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(vendorInfo.email, vendorInfo.password);

            await setIsFirebaseUserCreated(true)

        } catch (error) {
            alert(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.history, vendorInfo.email, vendorInfo.password]);

        if(redirect) {
            return <Redirect to='/' />;
        }
        else return (
            <div className="container vendor-reg-cont">
                <h1 className="vendor-sign-up-title">Opprett bedriftskonto</h1>

                {step === 1 && <FormOrgNumber vendor={vendor} setVendor={setVendor} setVendorInfo={setVendorInfo}/>}
                {step === 2 && <FormCompanyInfo vendor={vendor} vendorInfo={vendorInfo} setVendorInfo={setVendorInfo}/>}

                <div className="">
                <div className="two-btns-reg">
                    <Link className="links" to={ROUTES.LANDING_VENDOR}>
                    {vendor?.navn && step === 1 && <button className="vend-reg-btn">Avbryt</button>}</Link>
                    {vendor?.navn && step === 1 && <button className="vend-reg-btn" onClick={() => setStep(prevState => prevState + 1)}>Neste</button>}
                </div>
                <div className="two-btns-reg">
                    <Link className="links" to={ROUTES.LANDING_VENDOR}>{step > 1 && <button className="vend-reg-btn" onClick={previous}>Avbryt</button>}</Link>
                    {step === 2 && <button className="vend-reg-btn" onClick={submitVendorSignUp}>Ferdig</button>}
                </div>
                </div>
            </div>
        )
    };

    export default VendorSignUp
