import React from 'react';
import { Link } from 'gatsby';
import { aboutTexts, mobileAboutTexts } from '../../component-texts';

const MobileAbout = ({ reference }) => {
  const { component } = aboutTexts;
  const componentName = component.toUpperCase();

  const contentText = mobileAboutTexts.mainText.map(({ id, content }) => {
    return (
      <p key={id} className="mobile-about-content--wrapper__text">
        {content}
      </p>
    );
  });

  return (
    <>
      <div className="mobile-about-content" ref={reference}>
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-about-content--wrapper">{contentText}</div>
        <Link className="about" to="/about/">
          Więcej
        </Link>
      </div>
    </>
  );
};

export default MobileAbout;
