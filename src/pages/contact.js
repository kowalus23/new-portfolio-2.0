import React from 'react';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactTwo = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

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
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => {
        /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error(error);
      });
  };

  return (
    <>
      <div className="form-before-element">
        <div className="form-wrapper">
          <h1 className="form-wrapper--text">Zadaj pytanie!?</h1>
          <form
            method="POST"
            data-netlify="true"
            name="contact"
            data-netlify-honeypot="bot-field"
            className="custom-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="contact"
              value="contact"
              onChange={handleChange}
            />
            <label htmlFor="name">
              Imię/Nazwisko
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="email"
                placeholder="yourmail@gmail.com"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="content">
              Treść
              <textarea
                name="message"
                placeholder="Zapytaj o cokolwiek chcesz..."
                onChange={handleChange}
              />
            </label>
            <button className="form-button" type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactTwo;
