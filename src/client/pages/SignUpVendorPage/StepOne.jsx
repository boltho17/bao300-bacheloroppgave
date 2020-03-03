import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useForm } from "react-hook-form";

export const StepOne = props => {
  const NextButton = props.nextButton
  const { register, handleSubmit, setValue, watch } = useForm();
  const watchYes = watch("orgNr", false);
  const orgNrInput = watch("orgNr",0);
  //console.log("orgNrInput", orgNrInput, "orgNrInput.length", orgNrInput.length)
 if (typeof orgNrInput !== "undefined" && orgNrInput.length && orgNrInput.length >= 9){
    console.log(orgNrInput)
    props.checkOrgNr(orgNrInput)
  } else {console.log('')} 

 
    
        
  if (props.currentStep !== 1) { // Prop: The current step
    return null
  }
  return (
    <>
      {/* TODO: Fjern whitespace slik at gyldig nummer med mellomrom ikke feiler 
        TODO: Auto-søk orgnr */}
      <div>
        <label>Organisasjonsnummer</label>
        {/* 
          TODO: Fix focus/unfocus on input
           */}
        <input
          type="number"
          name="orgNr"
          
          ref={
            register({
              validate: value => value.length === 9 && console.log("y")
            })
          }
          //value={props.orgNr}
          
          //defaultValue={props.vendor?.orgNr}
          //onChange={/*e => setOrgNr(e.target.value.replace(/\s+/g, '')),*/  SignUpVendorPage.handleChange}
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






      
{/*         <input
          type="button"
          // value="Check"
          name="Check"
          id="check"
        //onClick={checkOrgNr}
        value="Sjekk organisasjonsnummer"
      /> */}
   

      {/* TODO: Autopopulates based on orgnr */}
      {!!Object.keys(props.brreg).length &&
        <>
          <div>
            {/* 
            TODO: Save vendorName in correct format
            */}
            <input
              type="text"
              name="vendorName"
              //defaultValue={cleanUp(state.brreg.navn, state.brreg.organisasjonsform?.kode)}
           // value={props.vendor?.vendorName}
            ref={register}
              // defaultValue={state.vendor.vendorName}
              //onChange={handleChange}
              placeholder="Selskapsnavn"
              disabled
            />
          </div>
          <div>
            <input
              type="text"
              name="displayName"
            //value={props.vendor?.displayName}
            ref={register}
              //defaultValue={state.vendor.displayName}
              //onChange={handleChange}
              placeholder="Visningsnavn for selger-profilen."
            />
            <label>Dette er hva som vil bli synlig for kunder.</label>
          </div>
          <div>
            <input
              type="text"
              name="address"
            //value={props.vendor?.address}
            ref={register}
              // defaultValue={state.brreg.forretningsadresse?.adresse}
             // onChange={handleChange}
              placeholder="Adresse"
              disabled
            />
          </div>

          {/*
        TODO: Validate pattern
        TODO: Check if valid
        TODO: Autopopulate poststed
        TODO: Move to step 1?
         */}
          <div>
            <input
              type="text"
              name="postalCode"
            //value={props.vendor?.postalCode}
            ref={register}
              //defaultValue={state.brreg.forretningsadresse?.postnummer}
              //onChange={handleChange}
              placeholder="Postnummer"
              disabled
            />
          </div>

          <div>
            <input
              type="text"
              name="city"
             // value={props.vendor?.city}
              //defaultValue={state.brreg.forretningsadresse?.kommune}
              //onChange={handleChange}
            placeholder="By"
            ref={register}
              disabled
            />
          </div>

          <div>
            <label htmlFor="country">
              Land</label>
            <select
              as="select"
              id="country"
            value="Norge"
            ref={register}
              //defaultValue="Norge"
              //onChange={handleChange}
            >
              <option disabled>-- velg land --</option>
              <option disabled value="Norge">Norge</option>
            </select>
          </div>

        </>
      }

      <div>
       {/* <NextButton /> */}
      </div>
    </>
  )
}

StepOne.propTypes = {

}

export default StepOne
