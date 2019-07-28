import React from 'react';
import { contactTexts } from '../../component-texts';
import ContactForm from '../../../pages/contact';

const MobileContact = ({ reference }) => {
  const { component } = contactTexts;
  const componentName = component.toUpperCase();

  return (
    <>
      <div className="mobile-contact-content" ref={reference}>
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-contact-content--wrapper">
          <div className="form-wrapper">
            <ContactForm />
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
