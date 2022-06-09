import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './stylesheets/Home.css'

function Home() {
  const [posts, setPosts] = useState([])
  const [addPost, setAddPost] = useState({ userName: "", title: "", content: "" })
  const [editPost, setEditPost] = useState({ userName: "", title: "", content: "" })
  const navigate = useNavigate();

  // // add new post and display--------------------------------------------------------------
  const handleChange = (event) => {
    setAddPost({ ...addPost, [event.target.name]: event.target.value })
  }
  // edit our post---------------------------------------------------------------
  const handleEditChange = (event) => {
    setEditPost({ ...editPost, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api"
      , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addPost)
      }
    )
      .then(response => response.json())
      .then(data => {
        const copy = [...posts]
        copy.push(data.post)
        setPosts(copy)
        setAddPost({ userName: "", title: "", content: "" })
      })
  };

  // remove function ---------------------------------------------------------------------------
  const handleRemove = (id) => {
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/" + id._id, {
      method: 'DELETE',
    })
      .then(() => navigate('/'))
    const newDisplay = [...posts]
    const filterDisplay = newDisplay.filter(post => post._id !== id._id)
    setPosts(filterDisplay)
  }
  // edit function---------------------------------------------------------------------------------
  const handleEdit = (id) => {
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/" + id._id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editPost)
    })
      .then(response => response.json())
      .then(() => {
        console.log(editPost)
        const copy = [...posts]
        copy.push(editPost)
      })
  }

  const startEditing = (id) => {
    setEditPost(id)
  }

  //useEffect to display the data----------------------------------------------------------
  useEffect(() => {
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api")
      .then(response => response.json())
      .then(data => setPosts(data.data))
  }, [])
  //display data function --------------------------------------------
  const display = posts.map((post, index) => {
    if (post) {
      return (
        <div className="general-posts" key={index}>
          <p className="post-username">{post.userName}</p>
          <p className="post-title">{post.title}</p>
          <p className="post-content">{post.content}</p>
          <button className="remove-button"
            onClick={() => handleRemove(post)}
          >Remove post</button>
          {post._id === editPost._id ? (
            <div>
              <form>
                <input type='text' name="userName" onChange={handleEditChange} ></input>
                <input type='text' name='title' onChange={handleEditChange}></input>
                <input type='text' name='content' onChange={handleEditChange} ></input>
                <input onClick={() => handleEdit(post)} type="submit"></input>
              </form>
            </div>
          ) : (
            <button className="edit-button" onClick={() => startEditing(post)}>Edit post</button>
          )}
        </div>
      )
    }
  })
  //--------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>Ventilation</h1>
      <form className="input-form"
        onSubmit={handleSubmit}
      >
        <input className="username-input" size="20" type='text' placeholder="Username" name="userName" onChange={handleChange} value={addPost.userName} required></input>
        <input className="title-input" size="50" type='text' placeholder="Title" name='title' onChange={handleChange} value={addPost.title} required></input>
        <input className="post-input" size="100" type='text' placeholder="Add post here" name='content' onChange={handleChange} value={addPost.content} required></input>
        <input className="submit" type="submit"></input>
      </form>
      {display}
    </div>
  );
}

export default Home;