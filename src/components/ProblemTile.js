import { useState } from "react";
const ProblemTile = (props) => {

    // live updates the text box
    const handleChange = (event) => {
        event.preventDefault()
        props.setCommentText(event.target.value)
    }

    let mappedComments = props.comments.map((comment) => {
        return <li className="comment">{comment}</li>
    })

    return (
        <div className="ProbTile">
            <li>{props.problem}</li>
            <ul>
                {mappedComments}
            </ul>
            <form onSubmit={props.handleComment} className='CommentSubmit'>
                <input type='text' placeholder='Comment' value={props.commentText} onChange={handleChange}></input>
                <input type='submit' className="submit"></input>
            </form>
        </div>
    );
}

export default ProblemTile;