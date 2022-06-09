import { useState } from "react";
const ProblemTile = (props) => {
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState('')

    // live updates the text box
    const handleChange = (event) => {
        event.preventDefault()
        setCommentText(event.target.value)
    }

    // handles the submittion of the form, adds the new comment to the api
    const handleSubmit = (event) => {
        event.preventDefault()
        let apiStructure = {comments: comments}
        let copy = [...comments]
        copy.push(commentText)
        setComments(copy)
        setCommentText('')
        fetch(`https://infinite-brook-21883.herokuapp.com/Ventilation-api/advice/${props.id}`
            , {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(apiStructure)
            }
        )
            .then(response => response.json())
            .then(data => console.log('heres your data' + data))
            .then(data => {
                let copy = [...comments]
                copy.push(commentText)
                setComments(copy)
                setCommentText('')
            })
    }

    let mappedComments = props.comments.map((comment) => {
        return <li className="comment">{comment}</li>
    })

    return (
        <div className="ProbTile">
            <li>{props.problem} - {props.solution}</li>
            <ul>
                {mappedComments}
            </ul>
            <form onSubmit={handleSubmit} className='CommentSubmit'>
                <input type='text' placeholder='comment' value={commentText} onChange={handleChange}></input>
                <input type='submit'></input>
            </form>
        </div>
    );
}

export default ProblemTile;