import { useEffect, useState } from "react";

const LifeAdvice = () => {
  const [problem, setProblem] = useState('')
  const [allProbs, setAllProbs] = useState([])

  // live updates the text box
  const handleChange = (event) => {
    event.preventDefault()
    setProblem(event.target.value)
  }

  // handles the submittion of the form
  const handleSubmit = (event) => {
    event.preventDefault()
    setProblem('')
  }

  // populates the page with information on load
  useEffect(() => {
    fetch('https://infinite-brook-21883.herokuapp.com/Ventilation-api/advice/advice')
      .then(response => response.json())
      .then(data => setAllProbs(data.username))
  }, []) 

  const mappedInfo = allProbs.map((info) => {
    return <li>{info.problem} - {info.solution}</li>
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Need help?' value={problem} onChange={handleChange}></input>
        <input type='submit'></input>
      </form>

      <ul>
        {mappedInfo}
      </ul>
    </>
  );
}

export default LifeAdvice;
