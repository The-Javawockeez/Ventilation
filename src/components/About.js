function About() {
  return (
    <>
      <div>
        <section>
          <h2>Site description</h2>
          <p>The intent of this website is to be a social media page that allows users to post their grievances. 
            From the Home page, you are able to look at all the posts users make, hide posts from your feed, and edit the username, 
            title, or body of a post. The Life Advice page is where a user can vent anonymously without worry of ridicule. Other users can 
            comment with advice on each post.</p>
        </section>

        <h1>Development Team</h1>
      </div>

      <div className="container">

        <section className="paige">
          <img src="https://i.imgur.com/53WrXCv.jpeg" height="200" alt=""></img>
          <h2>Paige</h2>
          <p>Hello! When my nose isn't buried in a book, it's buried in the thick of code! I teamed up with AJ
            to build our backend API and Life Advice page of the frontend, but I spent most of my time hunting the
            small bugs in our many errors along the way.</p>
        </section>

        <section className="robby">
          <img src="https://i.imgur.com/kUw5Ovd.jpg" height="200" alt=""></img>
          <h2>Robby</h2>
          <p>Hi! I'm a Full Stack Engineer based out in Houston, Texas. I'm proficient in Python,
            JavaScript and C++. Martin and I handled the front-end side of this project, so hope you
            like what you see!
          </p>
        </section>

        <section className="aj">
          <img src="https://i.imgur.com/L3DnMUv.jpeg" height="200" alt="aj" />

          <h2>AJ</h2>
          <p>Hey I'm a Full Stack Developer originally from Washington State. The back-end of this project
            was brought to you by Paige and I! This was my first MERN full-stack project, hope you all enjoy!
          </p>
        </section>

        <section className="marti">
          <img src="https://i.imgur.com/Hhb1zXP.jpeg" height="200" alt="marti"></img>
          <h2>Martin</h2>
          <p>Hey! I'm a Full Stack Developer out in Denver, Colorado. I worked on the front-end side of
            this project with Robby and learned a lot from this experience. I'm proficient in HTML/CSS/JavaScript
            and have a solid understanding of JS frameworks like React and Express.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;