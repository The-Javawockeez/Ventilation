import { useState } from "react";
const ProblemTile = (props) => {
const [comments, setComments] = useState([])
const [commentText, setCommentText] = useState('')

  // live updates the text box
  const handleChange = (event) => {
    event.preventDefault()
    setCommentText(event.target.value)
  }

  // handles the submittion of the form
  const handleSubmit = (event) => {
    event.preventDefault()
    let copy =[...comments]
    copy.push(commentText)
    setComments(copy)
    setCommentText('')
  }

    return (
        <>
            <li>{props.problem} - {props.solution}</li>
            {comments}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='comment' value={commentText} onChange={handleChange}></input>
                <input type='submit'></input>
            </form>
        </>
    );
}

export default ProblemTile;