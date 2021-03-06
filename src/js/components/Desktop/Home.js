import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../../assets/logo.svg';
import { socialIcons } from '../../additional-variables';
import { homeTexts } from '../../component-texts';

const Home = ({ button, goToPage, currentPage }) => {
  const { author, component, about, welcome, hi, buttonName } = homeTexts;
  const componentName = component.toUpperCase();

  const goToPortfolio = () => {
    return goToPage(1);
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
              <div className="icons">{socialIcons()}</div>
            </div>
            <div className="hero-content">
              <h1>
                <span>{hi}</span>
                <br />
                {welcome}
              </h1>
              <button
                className="btn button-portfolio"
                type="button"
                onClick={goToPortfolio}
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
            onKeyPress={button}
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
