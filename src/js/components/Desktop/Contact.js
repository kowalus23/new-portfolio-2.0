import React from 'react';
import HomeButton from '../../../assets/home.svg';
import { homeButton, socialIcons } from '../../additional-variables';
import { contactTexts } from '../../component-texts';
import ContactTwo from '../../../pages/contact';

const Contact = ({ button, currentPage, goToPage }) => {
  const { author, component } = contactTexts;
  const componentName = component.toUpperCase();

  const switchPage = (number = 0) => {
    return goToPage(number);
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
              <div className="icons">{socialIcons()}</div>
            </div>
            <ContactTwo />
            <div className="form-before-element">
              <div className="form-wrapper">
                <h1 className="form-wrapper--text">Zadaj pytanie!?</h1>
                <form
                  method="POST"
                  data-netlify="true"
                  name="contact"
                  data-netlify-honeypot="bot-field"
                  className="custom-form"
                  autoComplete="new-password"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="contact" value="contact" />
                  <label htmlFor="name">
                    Imię/Nazwisko
                    <input name="name" type="text" placeholder="John Doe" />
                  </label>
                  <label htmlFor="email">
                    Email
                    <input
                      name="email"
                      type="email"
                      placeholder="yourmail@gmail.com"
                    />
                  </label>
                  <label htmlFor="content">
                    Treść
                    <textarea
                      name="message"
                      placeholder="Zapytaj o cokolwiek chcesz..."
                    />
                  </label>
                  <button className="form-button" type="submit">
                    Wyślij
                  </button>
                </form>
              </div>
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
      <p className="copyrights">{`Copyright © ${new Date().getFullYear()} ${author}`}</p>
      <p className="my-email">kowalus23@gmail.com</p>
    </div>
  );
};

export default Contact;
