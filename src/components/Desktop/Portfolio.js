import React from 'react';
import HomeButton from '../../assets/home.svg';
import { projectsInfo } from '../projects';
import { homeButton, socialIcons } from '../additional-variables';
import { portfolioTexts } from '../component-texts';

const Portfolio = ({ button, currentPage, goToPage }) => {
  const { author, component } = portfolioTexts;
  const componentName = component.toUpperCase();

  const switchPage = (number = 0) => {
    return goToPage(number);
  };

  const cards = projectsInfo.map(({ id, content }) => {
    const technologies = content.technologies.map(technology => {
      return (
        <p
          key={technology}
          className="portfolio-card--inner__front-technologies"
        >
          {technology}
        </p>
      );
    });
    return (
      <div className="portfolio-card" key={id}>
        <div key={id} className="portfolio-card--inner">
          <div className="portfolio-card--inner__front">
            <h3 className="portfolio-card--inner__front-title">
              {content.title}
            </h3>
            <div className="portfolio-card--inner__front-image" />
            <div>{technologies}</div>
          </div>
          <div className="portfolio-card--inner__back">
            <h3 className="portfolio-card--inner__back-title">
              {content.title}
            </h3>
            <div className="flex-helper">
              <p className="portfolio-card--inner__back-description">
                {content.description}
              </p>
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
              <div className="icons">{socialIcons()}</div>
            </div>
            {cards}
            <div className="circle" />
          </div>
          <div
            role="button"
            tabIndex="0"
            className="hamburger-menu"
            onKeyPress={button}
            onClick={button}
          >
            <div className="hamburger-menu--stripes" />
          </div>
          <div
            onClick={() => switchPage(0)}
            onKeyPress={switchPage}
            className="home-button"
            role="button"
            tabIndex="0"
          >
            <HomeButton style={homeButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
