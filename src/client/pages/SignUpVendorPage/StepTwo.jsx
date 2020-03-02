import React from 'react'
import PropTypes from 'prop-types'

const StepTwo = props => {
  const NextButton = props.nextButton
  const PreviousButton = props.previousButton
  if (props.currentStep !== 2) { // Prop: The current step
    return null
  }
  return (
    <>
      {/* 
        TODO: Validate email 
        */}
      <div>
        <input
          //type="email"
          name="contactEmail"
          value={props.vendor?.contactEmail}
          //onChange={handleChange}
          placeholder="E-post"
        />
      </div>

      <div>
        <input
          type="text"
          name="contactPerson"
          value={props.vendor?.contactPerson}
         // onChange={handleChange}
          placeholder="Kontaktperson (Fullt navn)"
        />
      </div>

      {/*
        TODO: validate password
        TODO: compare passwords
         */}
      <div>
        <input
          type="password"
          name="password"
          //value={}
          //onChange={handleChange}
          placeholder="Passord"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          //value={}
          // onChange={handleChange}
          placeholder="Gjenta passord"
        />
      </div>

      <div>
{/*         <PreviousButton />
        <NextButton /> */}
      </div>

    </>
  )
}

StepTwo.propTypes = {

}

export default StepTwo
