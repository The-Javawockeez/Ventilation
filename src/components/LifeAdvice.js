import { useEffect, useState } from "react";
import ProblemTile from "./ProblemTile";

const LifeAdvice = () => {
  const [problem, setProblem] = useState('')
  const [solution, setSolution] = useState('')
  const [allProbs, setAllProbs] = useState([])
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  // live updates the text box
  const handleChange = (event) => {
    event.preventDefault()
    setProblem(event.target.value)
  }

  // handles the submittion of the form
  const handleSubmit = (event) => {
    let test = {
      problem: problem,
      solution: solution,
      comments: comments
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
        setProblem('')
        let copyComments = [...comments]
        copyComments.push(commentText)
        setComments(copyComments)
        setCommentText('')
        getAll()
      }
      )
  }

  // handles the submittion of the form, adds the new comment to the api
  const handleComment = () => {
    console.log('clicked')
  }

  const getAll = () => {
    fetch('https://infinite-brook-21883.herokuapp.com/Ventilation-api/advice/advice')
      .then(response => response.json())
      .then(data => setAllProbs(data.username))
  }

  // populates the page with information on load
  useEffect(() => { getAll() }, [])

  const mappedInfo = allProbs.map((info, handleComment) => {
    // console.log(info)
    return (
      <ProblemTile
        comments={info.comments}
        problem={info.problem}
        solution={info.solution}
        id={info._id}
        commentArr={info.comments}
        setComments={info.setComments}
        commentText={info.commentText}
        setCommentText={info.setCommentText}
        handleComment={handleComment}
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
