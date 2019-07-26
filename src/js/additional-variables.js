import React from 'react';
import FacebookLogo from '../assets/facebook.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import GithubLogo from '../assets/github.svg';

export const iconLinks = {
  github: 'https://github.com/kowalus23',
  facebook: 'https://www.facebook.com/kowalus23',
  linkedin: 'https://www.linkedin.com/in/patryk-kowalski',
};

export const iconsStyle = {
  height: '25px',
  width: '25px',
  marginTop: '8px',
};

export const menuIconsStyle = {
  marginTop: 0,
  height: '50px',
  width: '50px',
};

export const homeButton = {
  height: '20px',
  width: '20px',
};

const { facebook, linkedin, github } = iconLinks;
export const socialIcons = () => {
  return (
    <>
      <a rel="noopener noreferrer" href={facebook} target="_blank">
        <FacebookLogo style={iconsStyle} />
      </a>
      <a rel="noopener noreferrer" href={linkedin} target="_blank">
        <LinkedinLogo style={iconsStyle} />
      </a>
      <a rel="noopener noreferrer" href={github} target="_blank">
        <GithubLogo style={iconsStyle} />
      </a>
    </>
  );
};

export const mobileIconsStyle = {
  height: '40px',
  width: '40px',
  margin: '10px 15px 15px',
};

export const mobileMenuIcons = () => {
  return (
    <>
      <a rel="noopener noreferrer" href={facebook} target="_blank">
        <FacebookLogo style={mobileIconsStyle} />
      </a>
      <a rel="noopener noreferrer" href={linkedin} target="_blank">
        <LinkedinLogo style={mobileIconsStyle} />
      </a>
      <a rel="noopener noreferrer" href={github} target="_blank">
        <GithubLogo style={mobileIconsStyle} />
      </a>
    </>
  );
};
