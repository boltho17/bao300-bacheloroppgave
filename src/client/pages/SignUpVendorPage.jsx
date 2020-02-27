import React, { useState } from 'react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase'
import { Form, InputGroup, Container, Row, Button, Col } from 'react-bootstrap';

const SignUpVendorPage = (props) => {

  const initialState = {
    vendor:
    {
      orgNr: '', // Organisasjonsnummer
      vendorName: '', // Selskapsnavn
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
      country: '',
      phoneNumber: '',
      facebookPageUrl: '',
      instagramUsername: '',
      vendorDescription: ''

    },
    brreg: {}
  }
  const [state, setState] = useState(initialState)
  const [orgNr, setOrgNr] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  console.log("props", props)
  console.log("state", state)
// TODO: Implement required fields
  const onSubmit = e => {
    e.preventDefault()
    const fields = Array.prototype.slice.call(e.target)
    const field = fields.forEach((field) => 
    console.log("field",field?.value))
    //console.log("fields",fields)
    //const { email, username, password } = state
    const { name, value } = e.target  
    setState((prevState) =>
      ({
        ...prevState, vendor: ""
          
      }))

    /*
    const { name, value } = e.target
    setState({
      [name]: value
    })
    */
    console.log(state.vendor)
  }

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setState({
      [name]: value
    })    
  }


  const checkOrgNr = e => {
    e.preventDefault()
    console.log(orgNr)
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
    step = currentStep <= 1 ? 3 : step - 1
    setCurrentStep(step)
  }


  const NextButton = () =>{ // TODO: Implement this
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
      <Form onSubmit={onSubmit}>
        <StepOne
          currentStep={currentStep}
          handleChange={handleChange}
          email={state.email}
        />
        <StepTwo
          currentStep={currentStep}
          handleChange={handleChange}
          email={state.email}
        />
        <StepThree
          currentStep={currentStep}
          handleChange={handleChange}
          email={state.email}
        />

      </Form>
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
        <Form.Group controlId="organization">
          <Form.Label>Organisasjonsnummer</Form.Label>
          {/* 
          TODO: Fix focus/unfocus on input
           */}
          <Form.Control
            type="number"
            name="orgNr"
            defaultValue={orgNr}
            onChange={e => setOrgNr(e.target.value.replace(/\s+/g, ''))}
            placeholder="Organisasjonsnummer"
          />
          <Form.Text
            htmlFor="check">
            {orgNr &&
              !!!Object.keys(state.brreg).length ?
              "Organisasjonsnummeret er ikke gyldig. Forsøk igjen."
              : "Organisasjonsnummeret sjekkes mot Brønnøysundsregisteret."
              /* TODO: Flytte errormelding til fetch */
            }</Form.Text>
        </Form.Group>

        <Form.Group>
          <Button
            type="button"
            value="Check"
            name="Check"
            id="check"
            onClick={checkOrgNr}
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
                defaultValue={cleanUp(state.brreg.navn, state.brreg.organisasjonsform?.kode)}
                //onChange={state.brreg.navn}
              placeholder="Selskapsnavn"
              disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="address"
                defaultValue={state.brreg.forretningsadresse?.adresse}
                //onChange=""
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
              defaultValue={state.brreg.forretningsadresse?.postnummer}
              //onChange=""
              placeholder="Postnummer"
              disabled
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="city"
              defaultValue={state.brreg.forretningsadresse?.kommune}
              //onChange=""
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
            >
              <option disabled >-- velg land --</option>
              <option value="" disabled selected>Norge</option>
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
            type="email"
            name="contactEmail"
            //value={}
            //onChange=""
            placeholder="E-post"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="contactPerson"
            //value={}
            //onChange=""
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
            //onChange=""
            placeholder="Passord"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            //value={}
            //onChange=""
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
            //value={}
            //onChange=""
            placeholder="Bankontonummer"

          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            name="iban"
            //value={}
            //onChange=""
            placeholder="IBAN"
          />
        </Form.Group>

        {/* TODO: implement file size limit */}
        <Form.Group>
          <Form.Control
            type="file"
            name="vendorLogo"
            accept="image/x-png,image/jpeg"
          //value={}
          //onChange=""
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
            //value={}
            //onChange=""
            placeholder="Telefonnummer"
          />
        </Form.Group>


        {/*
        TODO: Sanitize
         */}
        <Form.Group>
          <Form.Control
            type="url"
            name="facebookPageUrl"
            //value={}
            //onChange=""
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
            //value={}
            //onChange=""
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
            //value={}
            //onChange=""
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
  const Steps = compose()(StepOne,StepTwo,StepThree)

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
