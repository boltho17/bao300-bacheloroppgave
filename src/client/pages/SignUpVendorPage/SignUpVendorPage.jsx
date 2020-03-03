import React, { useState, useRef } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
//import {AuthContext, withFirebase } from '../../components/Firebase';
import { useForm } from 'react-hook-form'
import {StepOne,StepTwo,  StepThree} from './index.js'

const SignUpVendorPage = (props) => {
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = data => console.log(data)
  // 913571398
 
  const initialState = {
    vendor:
    {
      orgNr: '913571398', // Organisasjonsnummer
      vendorName: '', // Selskapsnavn
      displayName: '', // Visiningsnavn for selskap
      address: '', // (Firma-)adresse
      contactEmail: '', // Kontakt-e-postadresse, blir også usnername
      contactPerson: '', //Kontaktperson
      //username: '', Håndteres av firebase(?)
      //password: '', --,,--
      bankAccount: '',
      iban: '',
      vendorLogo: '',
      postalCode: '',
      city: '',
      country: '',
      phoneNumber: '',
      facebookPageUrl: '',
      instagramUsername: '',
      website: '',
      vendorDescription: ''
    },
    brreg: {}
  }
  const [state, setState] = useState(initialState)
  const [orgNr, setOrgNr] = useState("")
  const [vendor, setVendor] = useState(initialState)
  const [currentStep, setCurrentStep] = useState(1)
  //console.log("props", props)
  //console.log("state", state)
  // TODO: Implement required fields

/*   const onSubmit = e => {
    e.preventDefault()
    //const fields = Array.prototype.slice.call(e.target)
    //const field = fields.forEach((field) => 
    //console.log("field",field?.value))
    //console.log("fields",fields)
    //const { email, username, password } = state
    const {
      orgNr,
      vendorName,
      displayName,
      address,
      contactEmail,
      contactPerson,
      bankAccount,
      iban,
      vendorLogo,
      postalCode,
      country,
      vity,
      phoneNumber,
      facebookPageUrl,
      instagramUsername,
      website,
      vendorDescription
    } = e.target;
    setState((prevState) =>
      ({
        ...prevState, vendor: ''

      }))


  } */

  const handleChange = e => {
    //e.preventDefault()
    const target = e.target
    const value = target.value
    const name = target.name

    //const { name, value } = e.target
    /* setState((prevState) =>
      ({
      ...prevState, vendor: {name:value}
    }))    */
    /* setVendor(prevValue =>
    ({ ...prevValue,[name]: value })) */

    setVendor({ [name]: value })

    console.log(vendor)
  }


  const setOrgNrFunc = async str => {
    console.log('str',str)
     state.vendor['orgNr'] = await str
    console.log('state.vendor.orgNr', state.vendor.orgNr)
   // return str
  }

  const checkOrgNr = e => {
    //e.preventDefault()
    //console.log(orgNr)
    console.log("ceckornr")
    let orgNr;
  
     //let entry = 6;
      
      if (!e.target) {
        orgNr = e.replace(/\s+/g, '')
       // setOrgNr(orgNr)
      } else {
        orgNr = e.target.value.replace(/\s+/g, '')
       // setOrgNr(orgNr)
      }
  
   
    if (orgNr && orgNr.length === 9) {
      //setOrgNr(orgNr)
      setState(setOrgNrFunc(orgNr))
      fetchData()
    } else console.log('orgnr is empty or in a wrong format')

    //setSubmitted(true)
  }

  const fetchData = async () => {
    const res = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${state?.vendor?.orgNr}`)
    res
      .json()
      .then(res => setState((prevState) => ({ ...prevState, brreg: res }, console.log( 'res',res))))
      .catch(err => console.log('fetcherr',err))

  }
  const upperFirst = (string) => { // TODO: Refactor
    string = string.split(' ');
    for (var i = 0; i < string.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    // Directly return the joined string
    return string.join(' ');
    //return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
  }

  const cleanUp = (navn, organisasjonsform) => {
    // TODO: Rename function to something better 
    // TODO: Refactor
    if (navn.includes(organisasjonsform) && organisasjonsform === 'AS') {
      //console.log(navn)
      let rm = navn.replace(' AS', '')
      return upperFirst(rm.toLowerCase())
    } else return upperFirst(navn.toLowerCase());
  }

  const next = () => {
    let step = currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    step = currentStep >= 2 ? 3 : step + 1
    setCurrentStep(step)
  }

  const prev = () => {
    let step = currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    step = currentStep <= 1 ? 1 : step - 1
    setCurrentStep(step)
  }


  const NextButton = () => { // TODO: Implement this
    //let currentStep = state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={next}>
          Next
      </button>
      )
    }
    // ...else render nothing
    return null;
  }

  const PreviousButton = () => {
    //let step = state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button
          type="button" onClick={prev}>
          Previous
      </Button>
      )
    }
    // ...else return nothing
    return null;
  }
  //const PreviousButtonComponent = PreviousButton() // Remove?



  
  
  const SignUpVendorBase = () => {
    return  (
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepOne {...props}
          currentStep={currentStep}
          brreg={state?.brreg}
          vendor={state?.vendor}
          checkOrgNr={checkOrgNr}
          //nextButton={NextButton}
          handleChange={handleChange}
         // ref={register}
          //orgNr={state.vendor?.orgNr}
          //brreg={state.brreg}
        //  vendorName={state.vendor?.vendorName}
        //  address={state.vendor?.address}
        //  postalCode={state.vendor?.postalCode}
        //   country={state.vendor?.country}
        //  city={state.vendor?.city}
        />
        <StepTwo {...props}
          currentStep={currentStep}
          vendor={state?.vendor}
          //nextButton={NextButton}
          //previousButton={PreviousButton}
          //handleChange={handleChange}
          //contactEmail={vendor?.contactEmail}
          //contactPerson={vendor?.contactPerson}
        // username/email
        // password
        />
        <StepThree {...props}
          currentStep={currentStep}
          vendor={state?.vendor}
          nextButton={NextButton}
          //previousButton={PreviousButton}

          handleChange={handleChange}
          bankAccount={vendor?.bankAccount}
          iban={vendor?.iban}
          vendorLogo={vendor?.vendorLogo}
          phoneNumber={vendor?.phoneNumber}
          displayName={vendor?.displayName}
          facebookPageUrl={state?.vendor?.displayName}
          instagramUsername={state?.vendor?.instagramUsername}
          website={state?.vendor?.website}
          vendorDescription={state?.vendor?.vendorDescription}
        /> 
        <NextButton />
        <PreviousButton/>
      </form>
    )

  }

  /* const SignUpVendorForm = compose(
    withRouter,
   // withFirebase
  )(SignUpVendorBase) */
  const SignUpVendorForm = SignUpVendorBase

 
 

  //const Steps = compose()(StepOne, StepTwo, StepThree)

  return (
    <div className="signUpVendorPage">
      <Container>
        <Row>
          <Col>
            <h1>Opprett en selgerprofil</h1>
            <p>Steg {currentStep}</p>
            <SignUpVendorForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpVendorPage
//export  SignUpVendorForm
