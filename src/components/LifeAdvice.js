import { useEffect, useState } from "react";
import ProblemTile from "./ProblemTile";

const LifeAdvice = () => {
  const [problem, setProblem] = useState('')
  const [solution, setSolution] = useState('')
  const [allProbs, setAllProbs] = useState([])

  // live updates the text box
  const handleChange = (event) => {
    event.preventDefault()
    setProblem(event.target.value)
  }

  // console.log(problem)

  // handles the submittion of the form
  const handleSubmit = (event) => {
    let test = {
      problem: problem,
      solution: solution,
      comments: [
      ]
    }
    event.preventDefault()
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/advice"
      , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(test)
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }
      )
      .catch(() => {
        console.log('missed the .then')
      })
  }

  // populates the page with information on load
  useEffect(() => {
    fetch('https://infinite-brook-21883.herokuapp.com/Ventilation-api/advice/advice')
      .then(response => response.json())
      .then(data => setAllProbs(data.username))
  }, [])

  const mappedInfo = allProbs.map((info) => {
    // console.log(info)
    return (
      <ProblemTile
        comments={info.comments}
        problem={info.problem}
        solution={info.solution}
        id={info._id}
      />
    )
  })

  return (
    <>
      <form onSubmit={handleSubmit} className='ProbPost'>
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
