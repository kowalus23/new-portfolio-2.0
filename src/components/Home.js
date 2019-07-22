import React from "react"
import {Link} from "gatsby"

const Home = ({button, keyHandler}) => {
  return (
    <div className="home-container" style={{border: '1px solid red', height: '100%'}}>
      <h1>Home</h1>
      <Link to="/page-2/">Go to page 2</Link>
      <div role="button" tabIndex="-1" className="hamburger-menu"
           onKeyPress={keyHandler}
           onClick={button}>
        Hamburger
      </div>
    </div>
  )
};

export default Home
