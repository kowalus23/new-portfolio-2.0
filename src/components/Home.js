import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';

const homeTexts = {
  author: 'Patryk Kowalski',
  component: 'Home',
  about: 'o mnie',
  welcome: 'Miło, że zawitałeś na moją strone',
  hi: 'Cześć!',
  buttonName: 'Portfolio',
};

const Home = ({ button, keyHandler, goToPage, currentPage }) => {
  const { author, component, about, welcome, hi, buttonName } = homeTexts;
  const componentName = component.toUpperCase();

  const switchPage = (number = null) => {
    return goToPage(number);
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="content--name">{componentName}</h1>
        <div className="row">
          <p className="author">{author}</p>
          <div className="col-60">
            <div className="side-content">
              <p className="counter">{`0${currentPage.currentPage}`}</p>
              <div className="page-bar" />
              <p className="counter">03</p>
              <div className="icons">
                <p>F</p>
                <p>Li</p>
                <p>Git</p>
              </div>
            </div>
            <div className="hero-content">
              <h1>
                <span>{hi}</span>
                <br />
                {welcome}
              </h1>
              <button
                className="btn button-portfolio"
                onClick={() => switchPage(1)}
                type="button"
              >
                {buttonName}
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
