import React from 'react';
import FacebookLogo from '../../assets/facebook.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import GithubLogo from '../../assets/github.svg';
import HomeButton from '../../assets/home.svg';
import { iconLinks, iconsStyle, homeButton } from '../additional-variables';
import { contactTexts } from '../component-texts';

const Contact = ({ button, currentPage, goToPage }) => {
  const { author, component } = contactTexts;
  const { github, facebook, linkedin } = iconLinks;
  const componentName = component.toUpperCase();

  const switchPage = (number = 0) => {
    return goToPage(number);
  };

  const buttonHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="contact-container">
      <div className="content">
        <h1 className="content--name">{componentName}</h1>
        <div className="row">
          <p className="author">{author}</p>
          <div className="contact-content">
            <div className="side-content">
              <p className="counter">{`0${currentPage.currentPage}`}</p>
              <div className="page-bar" />
              <p className="counter">03</p>
              <div className="icons">
                <a rel="noopener noreferrer" href={facebook} target="_blank">
                  <FacebookLogo style={iconsStyle} />
                </a>
                <a rel="noopener noreferrer" href={linkedin} target="_blank">
                  <LinkedinLogo style={iconsStyle} />
                </a>
                <a rel="noopener noreferrer" href={github} target="_blank">
                  <GithubLogo style={iconsStyle} />
                </a>
              </div>
            </div>
            <div className="form-wrapper">
              <h1 className="form-wrapper--text">Zadaj pytanie!?</h1>
              <form className="custom-form">
                <label htmlFor="email">
                  Email
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="yourmail@gmail.com"
                  />
                </label>
                <label htmlFor="content">
                  Tresc
                  <textarea
                    id="content"
                    name="content"
                    cols="30"
                    rows="10"
                    placeholder="Ask whatever you want..."
                  />
                </label>
                <button
                  onClick={buttonHandler}
                  className="form-button"
                  type="submit"
                >
                  Wyślij
                </button>
              </form>
            </div>
            <div>icons</div>
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

export default Contact;
