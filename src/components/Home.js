import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([])
  const [addPost, setAddPost] = useState({ artistName: "", albumName: "" })


  // const params = useParams();
  // const navigate = useNavigate();
  // console.log(params)

  // // add new post and display--------------------------------------------------------------
  // const handleChange = (event) => {
  //   // console.log(event.target.value)
  //   setAddPost({ ...addPost, [event.target.name]: event.target.value })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   fetch("http://localhost:4000/vinyls", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(addPost)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       const copy = [...posts]
  //       // replace vinyl with different data from the new database
  //       copy.push(data.vinyl)

  //       setPosts(copy)
  //       setAddPost({ artistName: "", albumName: "" })
  //       // console.log(addPost)
  //       console.log(addPost)

  //     })
  // };
  //------------------------------------------------------------------------
  // const handleRemove = () => {
  //   fetch("http://localhost:3000/vinyls/" + posts._id, {
  //     method: 'DELETE',
  //   })
  //     .then(() => navigate('/'))
  // }



  //useEffect to display the data-------------------------------------------
  useEffect(() => {
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/user")
      .then(response => response.json())
      .then(data => setPosts(data.data))
  }, [])

  // console.log(posts.vinyls)
  const displayPosts = posts.map((post, index) => (
    // console.log(post.userPosts[0].title)
    <div key={index}>
      <h3>{post.userName}</h3>
        <p>{post.userPosts[0].title}</p> 
        <p>{post.userPosts[0].content}</p> 
      {/* <button 
      onClick={handleRemove} 
      >Remove post</button>  */}
    </div>
  ))
  //---------------------------------------------------------------------




  return (
    <div>
      <h1>Home page</h1>
       {/* <form
         onSubmit={handleSubmit}
      > 
         <input type='text' placeholder="Username / Email" name="artistName"
         onChange={handleChange}
          value={addPost.artistName}></input> 
         <input type='text' placeholder="Add post here." name='albumName' onChange={handleChange} value={addPost.albumName}></input>
        <input type="submit"></input> 
      </form>  */}
       {displayPosts}
    </div>
  );
}

export default Home;