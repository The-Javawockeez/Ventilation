import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Home() {
  const [posts, setPosts] = useState([])
  const [addPost, setAddPost] = useState({ userName: "", title: "", content: "" })
  const navigate = useNavigate();
  const params = useParams();

  // // add new post and display--------------------------------------------------------------
  const handleChange = (event) => {

    setAddPost({ ...addPost, [event.target.name]: event.target.value })
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
  // const handleEdit = (id) => {
  //   fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/" + id._id, {
  //       method: 'PATCH',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(addPost)
  //     })
  //   .then(response => response.json())
  //   .then(data => {
  //       setPosts(data.post)
  //       setAddPost({ userName: "", title: "", content: "" })
  //   })
  // }

  //useEffect to display the data----------------------------------------------------------
  useEffect(() => {
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api")
      .then(response => response.json())
      .then(data => setPosts(data.data))
  }, [])
  const display = posts.map((post, index) => {
   if(post) {
  
    return (
      <div key={index}>
        <h3>{post.userName}</h3>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <button 
      onClick={() => handleRemove(post)} 
      >Remove post</button>  
      <button 
      // onClick={() => handleEdit(post)} 
      >Edit post</button> 
      </div>
    )
   }
  })
  //--------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>Home page</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input type='text' placeholder="Username" name="userName" onChange={handleChange} value={addPost.userName} required></input>
        <input type='text' placeholder="Title" name='title' onChange={handleChange} value={addPost.title} required></input>
        <input type='text' placeholder="Add post here" name='content' onChange={handleChange} value={addPost.content} required></input>
        <input type="submit"></input>
      </form>
      {display}
    </div>
  );
}

export default Home;