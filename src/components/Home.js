import React from 'react';
import { Link } from 'gatsby';

const texts = {
  about: 'o mnie',
};

const Home = ({ button, keyHandler }) => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Home</h1>
        <Link to="/about/">{texts.about}</Link>
        <div
          role="button"
          tabIndex="-1"
          className="hamburger-menu"
          onKeyPress={keyHandler}
          onClick={button}
        >
          Hamburger
        </div>
      </div>
    </div>
  );
};

export default Home;
