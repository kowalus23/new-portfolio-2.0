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
              method="POST"
              action="/"
              data-netlify="true"
              name="contact"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <input name="name" type="text" placeholder="John Doe" />

              <input
                name="email"
                type="email"
                placeholder="yourmail@gmail.com"
              />
              <textarea
                name="message"
                placeholder="Zapytaj o cokolwiek chcesz..."
              />
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
