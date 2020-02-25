import React, { useState, useEffect } from 'react';


const Brreg = () => {


  const [state, setstate] = useState()
  const [orgNr, setOrgNr] = useState("")
  const [submitted, setSubmitted] = useState(false)
  //const orgNr = "954831604"
  //var test = "hei"

  const fetchData = async () => {
    const res = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgNr}`)
    res
      .json()
      .then(res => setstate(res))
      .catch(err => console.log(err))

  }


  const cleanUp = (navn, organisasjonsform) => {
    if (navn.includes(organisasjonsform.kode) && organisasjonsform.kode === 'AS') {
      //console.log(navn)
      var rm = navn.replace(' AS', '')
      return rm.toLowerCase()
    } else return navn.toLowerCase();
  }

  useEffect(() => {
    //fetchData()

  }, []) //Temp


  const handleSubmit = event => {
    event.preventDefault();
    console.log(orgNr)
    fetchData()
    setSubmitted(true)
  }


  return (
    <>
      <h1>Brønnøysund API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Organisasjonsnummer

          <input
            type="text"
            name="organisasjonsnummer"
            value={orgNr}
            onChange={e => setOrgNr(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Send"
        />
      </form>
      {submitted && state &&
        <div className="result">
        <p>Du fylte inn organisasjonsnummeret {orgNr}&nbsp;
          som tilhører bedriften <span style={{ textTransform: 'capitalize' }}>{cleanUp(state.navn, state.organisasjonsform)}</span></p>
          <p>All informasjonen vi fant:</p>
          <ul>
            {/*Object.keys(state).map((s, i) => (
              <li key={i}>{s}</li>
            ))
            */}
          </ul>
        </div>
      }
    </>
  );
};

export default Brreg

