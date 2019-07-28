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
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />

        <input type="hidden" name="bot-field" onChange={handleChange} />

        <input type="text" name="name" onChange={handleChange} />

        <input type="email" name="email" onChange={handleChange} />

        <textarea name="message" onChange={handleChange} />

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactTwo;
