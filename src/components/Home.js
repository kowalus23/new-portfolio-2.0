import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';

const homeTexts = {
  author: 'Patryk Kowalski',
  component: 'Home',
  about: 'o mnie',
  welcome: 'Miło, że zawitałeś na moją strone',
  hi: 'Cześć!',
};

const Home = ({ button, keyHandler }) => {
  const { author, component, about, welcome, hi } = homeTexts;
  const componentName = component.toUpperCase();

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="content--name">{componentName}</h1>
        <div className="row">
          <p className="author">{author}</p>
          <div className="col-60">
            <div className="hero-content">
              <h1>
                <span>{hi}</span>
                <br />
                {welcome}
              </h1>
              <button className="btn button-portfolio" type="button">
                Portfolio
              </button>
            </div>
          </div>
          <div className="col-40">
            <div className="home-logo">
              <Logo />
            </div>
          </div>
          <Link className="about" to="/about/">
            {about}
          </Link>
          <div
            role="button"
            tabIndex="0"
            className="hamburger-menu"
            onKeyPress={keyHandler}
            onClick={button}
          >
            <div className="hamburger-menu--stripes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
