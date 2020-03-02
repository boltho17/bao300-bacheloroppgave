import React from 'react'
import PropTypes from 'prop-types'

const StepThree = props => {
  const PreviousButton = props.previousButton
  if (props.currentStep !== 3) { // Prop: The current step
    return null
  }
  return (
    <>
      {/*
        TODO: Validate pattern
         */}
      <div>
        <input
          type="text"
          name="bankAccount"
          value={props.vendor?.bankAccount}
         // onChange={handleChange}
          placeholder="Bankontonummer"

        />
      </div>

      <div>
        <input
          type="text"
          name="iban"
          value={props.vendor?.iban}
          //onChange={handleChange}
          placeholder="IBAN"
        />
      </div>

      {/* TODO: implement file size limit */}
      <div>
        <label>
          Last opp firma-logo
          </label>
        <input
          type="file"
          name="vendorLogo"
          accept="image/x-png,image/jpeg"
          value={props.vendor?.vendorLogo}
          //onChange={handleChange}
        />
      </div>


      {/*
        TODO: Validate pattern
        TODO: Add city / region ??
         */}
      <div>
        <input
          name="phoneNumber"
          value={props.vendor?.phoneNumber}
          //onChange={handleChange}
          placeholder="Telefonnummer"
        />
      </div>


      {/*
        TODO: Sanitize / js inject
         */}
      <div>
        <input
          type="url"
          name="facebookPageUrl"
          value={props.vendor?.facebookPageUrl}
          //onChange={handleChange}
          placeholder="Lenke til bedriftens Facebook-side"
        />
      </div>

      <div className="iconGroup">
        <div>
          <span className="icon">@</span>
        </div>
        <input
          type="text"
          name="instagramUsername"
          value={props.vendor?.instagramUsername}
          //onChange={handleChange}
          placeholder="Instragram-brukernavn"
        />
      </div>
      {/* 
        TODO: implementer text limit
        TODO: implementere wysiwyg-editor
        (h-tagger, bold, kursiv, paragrafer, url)
        TODO: Sanitize
        */}
      <div>
        <label htmlFor="vendorDescription">
          Beskrivelse</label>
        <textarea
          id="vendorDescription"
          name="vendorDescription"
          as="textarea"
          value={props.vendor?.vendorDescription}
         // onChange={handleChange}
          placeholder="Skriv en kort presentasjon om firmaet"
          rows="4" cols="50"
        />
      </div>

      {/* TODO: Implement previous button */}
      <div>
        {/* <PreviousButton /> */}
      </div>
      <div>
        <input
          type="submit"
          value="Next"
          value="Submit"
        />
      </div>
    </>
  )
}

StepThree.propTypes = {

}

export default StepThree
