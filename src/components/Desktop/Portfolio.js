import React, { useState } from 'react';
import HomeButton from '../../assets/home.svg';
import { projectsInfo } from '../projects';
import { homeButton, socialIcons } from '../additional-variables';
import { portfolioTexts } from '../component-texts';

const Portfolio = ({ button, currentPage, goToPage, breakPoint }) => {
  const [position, setPosition] = useState(0);

  const { author, component } = portfolioTexts;
  const componentName = component.toUpperCase();

  const switchPage = (number = 0) => {
    return goToPage(number);
  };

  const breakpoint = breakPoint();
  const moveRight = () => {
    const move = position - 250;
    if (position <= 0 && position >= -400 && breakpoint <= 1600) {
      return setPosition(move * 0.9);
    } else if (position <= 0 && position >= -700 && breakpoint <= 600) {
      return setPosition(move * 0.9);
    } else {
      return setPosition(0);
    }
  };

  const moveLeft = () => {
    const breakpoint = breakPoint();
    if (position <= 0 && breakpoint <= 1600) {
      const move = position + 250;
      if (move > 100) {
        return setPosition(0);
      }
      return setPosition(move * 0.9);
    } else {
      return setPosition(0);
    }
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
            <div
              className="card-mover-left"
              tabIndex="0"
              onKeyPress={moveLeft}
              role="button"
              onClick={moveLeft}
            />
            <div
              className="card-mover-right"
              tabIndex="0"
              onKeyPress={moveRight}
              role="button"
              onClick={moveRight}
            />
            <div className="side-content">
              <p className="counter">{`0${currentPage.currentPage}`}</p>
              <div className="page-bar" />
              <p className="counter">03</p>
              <div className="icons">{socialIcons()}</div>
            </div>
            <div
              className="card-wrapper"
              style={breakpoint >= 1600 ? { left: 0 } : { left: position }}
            >
              {cards}
            </div>
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
