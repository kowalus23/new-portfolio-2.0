import React from 'react';
import { portfolioTexts } from '../component-texts';

const MobilePortfolio = () => {
  const { component } = portfolioTexts;
  const componentName = component.toUpperCase();
  return (
    <>
      <div className="mobile-portfolio-content">
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-portfolio-content--wrapper">
          <div>
            slider
            <div>card</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePortfolio;
