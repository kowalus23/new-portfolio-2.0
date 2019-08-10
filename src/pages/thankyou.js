import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import '../css/themes/default/thankyou-default.scss';
import '../css/themes/vintage/thankyou-vintage.scss';
import '../css/thankyou.scss';

const ThankYou = () => {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    window.localStorage.getItem('currentTheme') &&
      setTheme(JSON.parse(window.localStorage.getItem('currentTheme')));
  });

  return (
    <>
      <div className={`thank-you-page ${theme}`}>
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
};

export default ThankYou;
