import React from 'react';
import { contactTexts } from '../../component-texts';

const MobileContact = ({ reference }) => {
  const { component } = contactTexts;
  const componentName = component.toUpperCase();

  return (
    <>
      <div className="mobile-contact-content" ref={reference}>
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-contact-content--wrapper">
          <div className="form-wrapper">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field"/>
              <input type="hidden" name="form-name" value="contact"/>
              <label htmlFor="name">
                Imię/Nazwisko
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="yourmail@gmail.com"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="content">
                Treść
                <textarea
                  id="content"
                  name="content"
                  placeholder="Zapytaj o cokolwiek chcesz..."
                />
              </label>
              <button className="form-button" type="submit">
                Wyślij
              </button>
            </form>
          </div>
          <div className="copyright">
            <p className="copyright--text">copyright</p>
            <p className="copyright--text">kowalus23@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContact;