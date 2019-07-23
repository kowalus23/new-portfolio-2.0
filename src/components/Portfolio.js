import React from 'react';
import FacebookLogo from '../assets/facebook.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import GithubLogo from '../assets/github.svg';

export const portfolioTexts = {
  author: 'Patryk Kowalski',
  component: 'Portfolio',
};

export const iconsStyle = {
  height: '25px',
  width: '25px',
  marginTop: '8px',
};

const Portfolio = ({ button, currentPage, keyHandler }) => {
  const { author, component } = portfolioTexts;
  const componentName = component.toUpperCase();

  return (
    <div className="portfolio-container">
      <div className="content">
        <h1 className="content--name">{componentName}</h1>
        <div className="row">
          <p className="author">{author}</p>
          <div className="col-100">
            <div className="side-content">
              <p className="counter">{`0${currentPage.currentPage}`}</p>
              <div className="page-bar" />
              <p className="counter">03</p>
              <div className="icons">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/kowalus23"
                  target="_blank"
                >
                  <FacebookLogo style={iconsStyle} />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/patryk-kowalski"
                  target="_blank"
                >
                  <LinkedinLogo style={iconsStyle} />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/kowalus23"
                  target="_blank"
                >
                  <GithubLogo style={iconsStyle} />
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card--inner">
                <div className="portfolio-card--inner__front">Front 1</div>
                <div className="portfolio-card--inner__back">Back 1</div>
              </div>
            </div>
            <div className="portfolio-card">2</div>
            <div className="portfolio-card">3</div>
            <div className="portfolio-card">4</div>
            <div className="portfolio-card">5</div>
            <div className="portfolio-card">6</div>
            <div className="portfolio-card">7</div>
            <div className="portfolio-card">8</div>
          </div>
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

export default Portfolio;
