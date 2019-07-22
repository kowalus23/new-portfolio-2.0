import React from "react"
import {Link} from "gatsby"

const Home = () => {
  return (
      <div className="home-container" style={{border: '1px solid red', height: '100%'}}>
        <h1>Home</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
  )
};


export default Home
