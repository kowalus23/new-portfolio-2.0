import React from 'react';
import FacebookLogo from '../assets/facebook.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import GithubLogo from '../assets/github.svg';
import { projectsInfo } from './projects';

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

  const cards = projectsInfo.map(({ id, content }) => {
    const technologies = content.technologies.map(technology => {
      return (
        <p
          key={technology}
          className="portfolio-card--inner__back-technologies"
        >
          {technology}
        </p>
      );
    });
    return (
      <div className="portfolio-card" key={id}>
        <div className="portfolio-card--inner">
          <div className="portfolio-card--inner__front">
            <h3 className="portfolio-card--inner__front-title">
              {content.title}
            </h3>
            <div
              style={{
                width: '100%',
                height: '100px',
                backgroundColor: 'white',
                margin: '10px 0',
              }}
            >
              IMAGE
            </div>
            <p className="portfolio-card--inner__front-description">
              {content.description}
            </p>
          </div>
          <div className="portfolio-card--inner__back">
            <h3 className="portfolio-card--inner__back-title">
              {content.title}
            </h3>
            <div className="flex-helper">
              <p className="portfolio-card--inner__back-description">
                {content.description}
              </p>
              <div>{technologies}</div>
              <div className="portfolio-buttons">
                <a
                  href={`${content.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href={`${content.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

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
            {cards}
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
