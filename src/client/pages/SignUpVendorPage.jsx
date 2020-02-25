import React, { useState } from 'react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase'

const SignUpVendorPage = (props) => {
  
const initialstate = {
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
  const [state, setstate] = useState(initialstate)
  const [orgNr, setOrgNr] = useState("")
  console.log("props", props)
  console.log("state",state)

  const onSubmit = e => {
    e.preventDefault()

  }

  const handleChange = e => {
    e.preventDefault()
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
      .then(res => setstate((prevState) => ({...prevState,brreg:res})))
      .catch(err => console.log(err))

  }


  const cleanUp = (navn, organisasjonsform) => {
    if (navn.includes(organisasjonsform.kode) && organisasjonsform.kode === 'AS') {
      //console.log(navn)
      var rm = navn.replace(' AS', '')
      return rm.toLowerCase()
    } else return navn.toLowerCase();
  }




const SignUpVendorBase = () => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="orgNr"
          value={orgNr}
          onChange={e => setOrgNr(e.target.value)}
          placeholder="Organisasjonsnummer"
        />
        
        <input 
          type="button"
          value="Check"
          name="Check" 
          id="check"
          onClick={checkOrgNr}
        /><label htmlFor="check">{orgNr && !!!Object.keys(state.brreg).length && "Organisasjonsnummeret er ikke gyldig. Forsøk igjen."}</label>
        {/* TODO: Autopopulates based on orgnr */}
        {!!Object.keys(state.brreg).length &&
          <>
            <input
              type="text"
              name="vendorName"
              defaultValue={state.brreg.navn}
              //onChange={state.brreg.navn}
              placeholder="Selskapsnavn"
            />
            <input
              type="text"
              name="address"
              defaultValue={state.brreg.forretningsadresse?.adresse}
              //onChange=""
              placeholder="Adresse"
            />
          </>
        }
        {/* .Autopopulates based on orgnr 
        TODO: Validate email 
        */}
        <input
          type="email"
          name="contactEmail"
          //value={}
          //onChange=""
          placeholder="E-post"
        />
        <input
          type="text"
          name="contactPerson"
          //value={}
          //onChange=""
          placeholder="Kontaktperson"
        />
        {/*
        TODO: validate password
        TODO: compare passwords
         */}
        <input
          type="password"
          name="password"
          //value={}
          //onChange=""
          placeholder="Passord"
        />
        <input
          type="password"
          name="password"
          //value={}
          //onChange=""
          placeholder="Gjenta passord"
        />
        {/*
        TODO: Validate pattern
         */}
        <input
          type="text"
          name="bankAccount"
          //value={}
          //onChange=""
          placeholder="Bankontonummer"

        />
        <input
          type="text"
          name="iban"
          //value={}
          //onChange=""
          placeholder="IBAN"
        />
        {/* TODO: implement file size limit */}
        <input
          type="file"
          name="vendorLogo"
          accept="image/x-png,image/jpeg"
        //value={}
        //onChange=""
        />
        {/*
        TODO: Validate pattern
        TODO: Check if valid
        TODO: Autopopulate poststed
         */}
        <input
          type="text"
          name="postalCode"
          //value={}
          //onChange=""
          placeholder="Postnummer"
        />

        <label htmlFor="country">
          Land</label>
          <select id="country">
            <option disabled >velg</option>
            <option value="">Norge</option>
          </select>
        
        {/*
        TODO: Validate pattern
         */}
        <input
          type="tel"
          name="phoneNumber"
          //value={}
          //onChange=""
          placeholder="Telefonnummer"
        />
        {/*
        TODO: Sanitize
         */}
        <input
          type="url"
          name="facebookPageUrl"
          //value={}
          //onChange=""
          placeholder="Lenke til Facebook-konto"
        />
        <input
          type="text"
          name="instagramUsername"
          //value={}
          //onChange=""
          placeholder="Instragram-brukernavn"
        />

        {/* 
        TODO: implementer text limit
        TODO: implementere wysiwyg-editor
        (h-tagger, bold, kursiv, paragrafer, url)
        TODO: Sanitize
        */}
        <label htmlFor="vendorDescription">
          Beskrivelse</label>
          <textarea
            id="vendorDescription"
            name="vendorDescription"
            //value={}
            //onChange=""
            placeholder="Skriv en kort presentasjon om firmaet"
            rows="4" cols="50"
            />

        <input
          type="submit"
          value="Next"
        />
      </form>
    </>
  )

}

  const SignUpVendorForm = compose(
    withRouter,
    withFirebase
  )(SignUpVendorBase)



  return (
    <div className="signUpVendorPage">
      <h1>Opprett en selgerprofil</h1>
      <SignUpVendorForm />
    </div>
  );

}

export default SignUpVendorPage
//export  SignUpVendorForm 
