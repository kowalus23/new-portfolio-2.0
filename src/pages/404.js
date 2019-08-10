import React from 'react';
import { Link } from 'gatsby';
import '../css/404.scss';
import Logo from '../assets/logo.svg';
import { socialIcons } from '../js/additional-variables';

const NotFoundPage = () => {
  return (
    <div className="page-404">
      <div className="page-404--container">
        <h1 className="page-404--container__content-name">404</h1>
        <div className="content">
          <div className="row">
            <p className="author">Patryk K..Doe</p>
            <div className="col-60">
              <div className="side-content">
                <p className="counter">Err</p>
                <div className="page-bar" />
                <p className="counter">Undefined</p>
                <div className="icons">{socialIcons()}</div>
              </div>
              <div className="error-text">
                <h1>Niestety, nie ma takiej strony!</h1>
                <Link className="btn button-portfolio" to="/">
                  Home
                </Link>
              </div>
            </div>
            <div className="col-40">
              <div className="home-logo">
                <Logo />
              </div>
            </div>
            <p className="about">Null</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
