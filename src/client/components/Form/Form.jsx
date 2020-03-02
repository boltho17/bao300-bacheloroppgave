import React from 'react'

/* export const Form = () => {
  return (
    <div>
      
    </div>
  )
}
 */
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
)


