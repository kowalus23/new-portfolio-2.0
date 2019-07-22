import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types";

const Home = ({button}) => {
  return (
      <div className="home-container" style={{border: '1px solid red', height: '100%'}}>
        <h1>Home</h1>
        <Link to="/page-2/">Go to page 2</Link>
        <button type="button" onClick={button} className="hamburger-menu">Hamburger</button>
      </div>
  )
};

Home.propTypes = {
  button: PropTypes.func,
};

Home.defaultProps = {
  button: PropTypes.func,
};

export default Home
