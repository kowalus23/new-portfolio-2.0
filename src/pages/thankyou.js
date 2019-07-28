import React from 'react';
import { Link } from 'gatsby';
import '../css/thankyou.scss';

const ThankYou = () => (
  <>
    <div className="thank-you-page">
      <h3 className="thank-you-page--message">MESSAGE</h3>
      <div className="thank-you-page--container">
        <div className="thank-you-page--container__content">
          <h2>Sukces!</h2>
          <h1>
            Dzięki za wysłanie wiadomości, odezwę się tak szybko jak to tylko
            możliwe!
          </h1>
          <Link className="thank-you-page--container__button" to="/">
            Wróć
          </Link>
        </div>
      </div>
      <h3 className="thank-you-page--sent">SENT</h3>
    </div>
  </>
);

export default ThankYou;
