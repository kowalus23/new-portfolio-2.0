import React from 'react';
import { Link } from 'gatsby';
import '../css/about.scss';
import { aboutTexts } from '../js/component-texts';

const About = () => {
  const { know, used, interested, download } = aboutTexts;
  const known = aboutTexts.known.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });
  const touched = aboutTexts.touched.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });
  const planned = aboutTexts.planned.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  const mainText = aboutTexts.mainText.map(({ id, content }) => {
    return (
      <p key={id} className="main-content--text">
        {content}
      </p>
    );
  });

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="content--name">ABOUT</h1>
        <div className="about-content">
          <div className="col-20">
            <div className="content-knowledge">
              <div className="content-knowledge-known">
                <h3>{know}</h3>
                <ul>{known}</ul>
              </div>
              <div className="content-knowledge-future">
                <div className="touched">
                  <h3>{used}</h3>
                  <ul>{touched}</ul>
                </div>
                <div className="planned">
                  <h3>{interested}</h3>
                  <ul>{planned}</ul>
                </div>
              </div>
            </div>
            <a
              className="button"
              href="../assets/Patryk-Kowalski-CV-2019.pdf"
              download
            >
              {download}
            </a>
            <Link className="home" to="/">
              Home
            </Link>
          </div>
          <div className="col-80">
            <div className="main-content">{mainText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
