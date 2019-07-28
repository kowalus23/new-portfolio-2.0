import React, { useState } from 'react';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [message, setMessage] = useState({});

  const handleOnChange = ({ target }) => {
    if (target.getAttribute('name') === 'name') {
      setName(target.value);
    } else if (target.getAttribute('name') === 'email') {
      setEmail(target.value);
    } else if (target.getAttribute('name') === 'message') {
      setMessage(target.value);
    }
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
        name,
        email,
        message,
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
      <form
        method="POST"
        data-netlify="true"
        name="contact"
        action="/thankyou/"
        data-netlify-honeypot="bot-field"
        className="custom-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="form-name"
          value="contact"
          onChange={handleOnChange}
        />
        <label htmlFor="name">
          Imię/Nazwisko
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            placeholder="yourmail@gmail.com"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="content">
          Treść
          <textarea
            name="message"
            placeholder="Zapytaj o cokolwiek chcesz..."
            onChange={handleOnChange}
          />
        </label>
        <button className="form-button" type="submit">
          Wyślij
        </button>
      </form>
    </>
  );
};

export default ContactForm;
