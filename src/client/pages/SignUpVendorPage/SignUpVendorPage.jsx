import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';

const SignUpVendorPage = (props) => {
  // 913571398
  const initialState = {
    vendor:
    {
      orgNr: '', // Organisasjonsnummer
      vendorName: '', // Selskapsnavn
      displayName: '', // Visiningsnavn for selskap
      address: '', // (Firma-)adresse
      contactEmail: '', // Kontakt-e-postadresse, blir også usnername
      contactPerson: '', //Kontaktperson
      //username: '', Håndteres av firebase(?)
      //password: '', --,,--

      // Part 2
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

  const onSubmit = e => {
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

    /*
    const { name, value } = e.target
    setState({
      [name]: value
    })
    */
    //console.log(state.vendor)
  }

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


  const checkOrgNr = e => {
    e.preventDefault()
    //console.log(orgNr)
    if (orgNr && orgNr.length === 9) {
      fetchData()
    } else console.log('orgnr empty or in a wrong format')

    //setSubmitted(true)
  }

  const fetchData = async () => {
    const res = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgNr}`)
    res
      .json()
      .then(res => setState((prevState) => ({ ...prevState, brreg: res })))
      .catch(err => console.log(err))

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
    return (
      <form onSubmit={onSubmit}>
        <StepOne
          //    currentStep={currentStep}
          handleChange={handleChange}
          orgNr={vendor.orgNr}
        //  vendorName={state.vendor?.vendorName}
        //  address={state.vendor?.address}
        //  postalCode={state.vendor?.postalCode}
        //   country={state.vendor?.country}
        //  city={state.vendor?.city}
        />
        <StepTwo
          currentStep={currentStep}
          handleChange={handleChange}
          contactEmail={vendor?.contactEmail}
          contactPerson={vendor?.contactPerson}
        // username/email
        // password
        />
        <StepThree
          currentStep={currentStep}
          handleChange={handleChange}
          bankAccount={vendor?.bankAccount}
          iban={vendor?.iban}
          vendorLogo={vendor?.vendorLogo}
          phoneNumber={vendor?.phoneNumber}
          displayName={vendor?.displayName}
          facebookPageUrl={state.vendor?.displayName}
          instagramUsername={state.vendor?.instagramUsername}
          website={state.vendor?.website}
          vendorDescription={state.vendor?.vendorDescription}
        />

      </form>
    )

  }

  const SignUpVendorForm = compose(
    withRouter,
    withFirebase
  )(SignUpVendorBase)

  const StepOne = () => {
    if (currentStep !== 1) { // Prop: The current step
      return null
    }
    return (
      <>
        {/* TODO: Fjern whitespace slik at gyldig nummer med mellomrom ikke feiler 
        TODO: Auto-søk orgnr */}
        <div controlId="organization">
          <label>Organisasjonsnummer</label>
          {/* 
          TODO: Fix focus/unfocus on input
           */}
          <input
            type="number"
            name="orgNr"
            value={vendor.orgNr}
            // defaultValue={state.vendor.orgNr}
            onChange={/*e => setOrgNr(e.target.value.replace(/\s+/g, '')),*/ handleChange}
            placeholder="Organisasjonsnummer"
          />
          {/*  <Form.Text
            htmlFor="check">
            {orgNr &&
              !!!Object.keys(state.brreg).length ?
              "Organisasjonsnummeret er ikke gyldig. Forsøk igjen."
              : "Organisasjonsnummeret sjekkes mot Brønnøysundsregisteret."
              // TODO: Flytte errormelding til fetch 
            }</Form.Text> */}
        </div>


        <input type="text" name="" />
        <input type="number" name="" />
        <input type="email" name="" />
        <input type="url" name="" />
        <input type="password" name="" />






        <Form.Group>
          <Button
            type="button"
            // value="Check"
            name="Check"
            id="check"
          //onClick={checkOrgNr}
          >Sjekk organisasjonsnummer</Button>
        </Form.Group>

        {/* TODO: Autopopulates based on orgnr */}
        {!!Object.keys(state.brreg).length &&
          <>
            <Form.Group>
              {/* 
            TODO: Save vendorName in correct format
            */}
              <Form.Control
                type="text"
                name="vendorName"
                //defaultValue={cleanUp(state.brreg.navn, state.brreg.organisasjonsform?.kode)}
                value={state.vendor?.vendorName}
                // defaultValue={state.vendor.vendorName}
                onChange={handleChange}
                placeholder="Selskapsnavn"
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="displayName"
                value={state.vendor?.displayName}
                //defaultValue={state.vendor.displayName}
                onChange={handleChange}
                placeholder="Visningsnavn for selger-profilen."
              />
              <Form.Text>Dette er hva som vil bli synlig for kunder.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="address"
                value={state.vendor?.address}
                // defaultValue={state.brreg.forretningsadresse?.adresse}
                onChange={handleChange}
                placeholder="Adresse"
                disabled
              />
            </Form.Group>

            {/*
        TODO: Validate pattern
        TODO: Check if valid
        TODO: Autopopulate poststed
        TODO: Move to step 1?
         */}
            <Form.Group>
              <Form.Control
                type="text"
                name="postalCode"
                value={state.vendor?.postalCode}
                //defaultValue={state.brreg.forretningsadresse?.postnummer}
                onChange={handleChange}
                placeholder="Postnummer"
                disabled
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="city"
                value={state.vendor?.city}
                //defaultValue={state.brreg.forretningsadresse?.kommune}
                onChange={handleChange}
                placeholder="By"
                disabled
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="country">
                Land</Form.Label>
              <Form.Control
                as="select"
                id="country"
                value="Norge"
                //defaultValue="Norge"
                onChange={handleChange}
              >
                <option disabled>-- velg land --</option>
                <option disabled value="Norge">Norge</option>
              </Form.Control>
            </Form.Group>

          </>
        }

        <Form.Group>
          <NextButton />
        </Form.Group>
      </>
    )
  }

  const StepTwo = () => {
    if (currentStep !== 2) { // Prop: The current step
      return null
    }
    return (
      <>
        {/* 
        TODO: Validate email 
        */}
        <Form.Group>
          <Form.Control
            //type="email"
            name="contactEmail"
            value={vendor?.contactEmail}
            onChange={handleChange}
            placeholder="E-post"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="contactPerson"
            value={vendor?.contactPerson}
            onChange={handleChange}
            placeholder="Kontaktperson (Fullt navn)"
          />
        </Form.Group>

        {/*
        TODO: validate password
        TODO: compare passwords
         */}
        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            //value={}
            //onChange={handleChange}
            placeholder="Passord"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            //value={}
            // onChange={handleChange}
            placeholder="Gjenta passord"
          />
        </Form.Group>

        <Form.Group>
          <PreviousButton />
          <NextButton />
        </Form.Group>

      </>
    )
  }
  const StepThree = () => {
    if (currentStep !== 3) { // Prop: The current step
      return null
    }
    return (
      <>
        {/*
        TODO: Validate pattern
         */}
        <Form.Group>
          <Form.Control
            type="text"
            name="bankAccount"
            value={state.vendor?.bankAccount}
            onChange={handleChange}
            placeholder="Bankontonummer"

          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="iban"
            value={state.vendor?.iban}
            onChange={handleChange}
            placeholder="IBAN"
          />
        </Form.Group>

        {/* TODO: implement file size limit */}
        <Form.Group>
          <Form.Label>
            Last opp firma-logo
          </Form.Label>
          <Form.Control
            type="file"
            name="vendorLogo"
            accept="image/x-png,image/jpeg"
            value={state.vendor?.vendorLogo}
            onChange={handleChange}
          />
        </Form.Group>


        {/*
        TODO: Validate pattern
        TODO: Add city / region ??
         */}
        <Form.Group>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={state.vendor?.phoneNumber}
            onChange={handleChange}
            placeholder="Telefonnummer"
          />
        </Form.Group>


        {/*
        TODO: Sanitize / js inject
         */}
        <Form.Group>
          <Form.Control
            type="url"
            name="facebookPageUrl"
            value={state.vendor?.facebookPageUrl}
            onChange={handleChange}
            placeholder="Lenke til bedriftens Facebook-side"
          />
        </Form.Group>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="instagramUsername"
            value={state.vendor?.instagramUsername}
            onChange={handleChange}
            placeholder="Instragram-brukernavn"
          />
        </InputGroup>
        {/* 
        TODO: implementer text limit
        TODO: implementere wysiwyg-editor
        (h-tagger, bold, kursiv, paragrafer, url)
        TODO: Sanitize
        */}
        <Form.Group>
          <Form.Label htmlFor="vendorDescription">
            Beskrivelse</Form.Label>
          <Form.Control
            id="vendorDescription"
            name="vendorDescription"
            as="textarea"
            value={state.vendor?.vendorDescription}
            onChange={handleChange}
            placeholder="Skriv en kort presentasjon om firmaet"
            rows="4" cols="50"
          />
        </Form.Group>

        {/* TODO: Implement previous button */}
        <Form.Group>
          <PreviousButton />
        </Form.Group>
        <Form.Group>
          <Button
            type="submit"
            value="Next"
          >Submit</Button>
        </Form.Group>
      </>
    )
  }
  const Steps = compose()(StepOne, StepTwo, StepThree)

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
