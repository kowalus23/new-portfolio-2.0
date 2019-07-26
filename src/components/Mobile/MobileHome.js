import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import '../Mobile.scss';
import MobileAbout from './MobileAbout';
import MobilePortfolio from './MobilePortfolio';
import MobileContact from './MobileContact';
import { homeTexts } from '../component-texts';

const MobileHome = () => {
  const [move, setMove] = useState(60);

  const { component, author, welcome, hi } = homeTexts;
  const componentName = component.toUpperCase();

  useEffect(() => {
    // eslint-disable-next-line
    let avoidBugError = false;
    window.addEventListener('scroll', scrollHandler);

    return () => {
      avoidBugError = true;
    };
  });

  const scrollHandler = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setMove(45);
    } else setMove(60);
  };

  return (
    <>
      <div className="mobile-container">
        <nav style={{ minHeight: `${move}px` }}>
          <h3>{author}</h3>
          <div>Hamburger</div>
        </nav>
        <div className="mobile-home-content">
          <h2 className="content-name">{componentName}</h2>
          <div className="hero-content">
            <Logo />
            <h1>
              <span>{hi}</span>
              <br />
              {welcome}
            </h1>
          </div>
        </div>
        <MobileAbout />
        <MobilePortfolio />
        <MobileContact />
      </div>
    </>
  );
};

export default MobileHome;
