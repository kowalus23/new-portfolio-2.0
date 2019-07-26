import React from 'react';
import { Link } from 'gatsby';
import { aboutTexts } from '../component-texts';

const MobileAbout = () => {
  const { component } = aboutTexts;
  const componentName = component.toUpperCase();

  return (
    <>
      <div className="mobile-about-content">
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-about-content--wrapper">
          <p className="mobile-about-content--wrapper__text">
            Mam na imię Patryk, programuje od niecałych dwóch lat. Gdybym
            wiedział, że programowanie jest tak absorbujące i są to poniekąd
            wirtualne klocki lego, to zapewne zacząłbym wcześniej!
          </p>
          <p className="mobile-about-content--wrapper__text">
            Przez rok pracowałem dla świetnego pracodawcy User.com, wcześniej
            (Userengage). Moim głównym zadaniem było napisać cały front
            user.com, zaorać ponad 100 stron i stworzyć od sera z nowym
            designem. Firma ponad to stawia na nowe technologie, ja dotknąłem
            Vue/Python(Django), a na pewno miałem dużo
            HTML/CSS(Sass)/Webpack/JS(jQuery)
          </p>
          <p className="mobile-about-content--wrapper__text">
            Poza tym jestem głodny wyzwań, rozwoju, żeby szlifować umiejętności
            JS i nie tylko! :) po więcej zapraszam pod przycisk:
          </p>
        </div>
        <Link className="about" to="/about/">
          Więcej
        </Link>
      </div>
    </>
  );
};

export default MobileAbout;
