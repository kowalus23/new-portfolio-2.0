import React from 'react';
import HomeButton from '../../../assets/home.svg';
import { homeButton, socialIcons } from '../../additional-variables';
import { contactTexts } from '../../component-texts';

const Contact = ({ button, currentPage, goToPage }) => {
  const { author, component } = contactTexts;
  const componentName = component.toUpperCase();

  const switchPage = (number = 0) => {
    return goToPage(number);
  };

  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    /* eslint-disable */
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    }).catch(error => {
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.error(error);
    });
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
            <div className="form-before-element">
              <div className="form-wrapper">
                <h1 className="form-wrapper--text">Zadaj pytanie!?</h1>
                <form
                  name="contact"
                  method="post"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </p>
                  <p>
                    <input type="text" name="name" onChange={handleChange} />
                  </p>
                  <p>
                    <input type="email" name="email" onChange={handleChange} />
                  </p>
                  <p>
                    <textarea name="message" onChange={handleChange} />
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
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
