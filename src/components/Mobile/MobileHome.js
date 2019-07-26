import React, { useEffect, useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import Logo from '../../assets/logo.svg';
import '../Mobile.scss';
import MobileAbout from './MobileAbout';
import MobilePortfolio from './MobilePortfolio';
import MobileContact from './MobileContact';
import { homeTexts, menuTexts } from '../component-texts';
import { mobileMenuIcons } from '../additional-variables';

const MobileHome = () => {
  const [move, setMove] = useState(60);
  const [toggle, setToggle] = useState(false);

  const { home, portfolio, contact, about } = menuTexts;
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

  const buttonHandler = () => {
    setToggle(!toggle);
  };

  const scrollHandler = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setMove(45);
    } else setMove(60);
  };

  return (
    <>
      <div className="mobile-container">
        <nav
          className={toggle ? 'hideShadow' : 'showShadow'}
          style={{ minHeight: `${move}px` }}
        >
          <h3>{author}</h3>
          <Burger onClick={buttonHandler} isOpen={toggle} />
        </nav>
        <div
          className="nav-menu"
          style={toggle ? { top: '45px' } : { top: '-380px' }}
        >
          <p className="nav-menu--item">{home}</p>
          <p className="nav-menu--item">{about}</p>
          <p className="nav-menu--item">{portfolio}</p>
          <p className="nav-menu--item">{contact}</p>
          <div className="nav-menu--icons">{mobileMenuIcons()}</div>
        </div>
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
