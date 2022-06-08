import { useEffect, useState } from 'react'
function Home() {
  const [posts, setPosts] = useState([])
  const [addPost, setAddPost] = useState({ userName: "", title: "", content: "" })


  // // add new post and display--------------------------------------------------------------
  const handleChange = (event) => {

    setAddPost({ ...addPost, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://infinite-brook-21883.herokuapp.com/Ventilation-api/user"
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
        // console.log('data is '+ data)
        const copy = [...posts]
        console.log("data is " + data.post)
        copy.push(data.post)

        setPosts(copy)
        setAddPost({ userName: "", title: "", content: "" })
      })
  };

  // ------------------------------------------------------------------------
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
  // console.log('post')
  // console.log(posts)
  const display = posts.map((post, index) => {
    // console.log('post is '+ post)
   if(post) {
  
    return (
      <div key={index}>
        <h3>{post.userName}</h3>
        <p>{post.title}</p>
        <p>{post.content}</p>
        {/* <button 
      onClick={handleRemove} 
      >Remove post</button>   */}
      </div>
    )
   }
  })


  //---------------------------------------------------------------------



  // console.log("addPost is ", addPost)
  return (
    <div>
      <h1>Home page</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input type='text' placeholder="Username" name="userName"
          onChange={handleChange}
          value={addPost.userName}></input>
        <input type='text' placeholder="Title" name='title' onChange={handleChange} value={addPost.title}></input>
        <input type='text' placeholder="Add post here" name='content' onChange={handleChange} value={addPost.content}></input>
        <input type="submit"></input>
      </form>
      {display}
    </div>
  );
}

export default Home;