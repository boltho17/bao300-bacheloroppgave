import React, { useState } from 'react'
import FormInput from '../components/Forms/FormInput'
import {CREATE_VENDOR} from '../components/GraphQL/user/mutations'
import { useMutation } from '@apollo/react-hooks'

export const Mutations = () => {


  let input;
  const [response, setResponse] = useState()
  const [addVendor, { data }] = useMutation(CREATE_VENDOR);
  //const { loading, error, data } = useMutation(CREATE_VENDOR);


  //if (loading) return setResponse("Loading~~")
  //else if (error) return setResponse(error)
   if(data) return setResponse(data)

  const click = () => {
    console.log('Vendor created')
    addVendor({
      variables: {
        displayName: input.displayName,
        orgnr: input.orgnr,
        bankAccount: input.bankAccount,
        bankAccount: input.bankAccount,
        address: input.address,
        userId: input.userId
      }
},console.log(data))
    input.displayName = 'a';
    input.orgnr = 'b';
    input.bankAccount = 'c';
    input.logoImage = 'd';
    input.address = 'e';
    input.userId = 'f';
    
    //setResponse({obj: { "hello": "world", "Test": ["hello"] }})
  }



  return (
    <div style={{ padding: '100px 1em' }}>

      <FormInput
        type="button"
        value="Create vendor"
        onClick={click}
      />

      <div>
        <p>Response:</p>
        <p>{JSON.stringify(response, null,4)}</p>
      </div>






    </div>
  )
}
