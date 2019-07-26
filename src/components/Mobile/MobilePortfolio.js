import React from 'react';
import { portfolioTexts } from '../component-texts';
import { projectsInfo } from '../projects';

const MobilePortfolio = () => {
  const { component } = portfolioTexts;
  const componentName = component.toUpperCase();

  const cards = projectsInfo.map(({ id, content }) => {
    return (
      <td className="card" key={id}>
        <h2 className="card--title">{content.title}</h2>
        <div className="card--wrapper">
          <p className="card--wrapper--description">{content.description}</p>
          <div className="card--wrapper--buttons">
            <a
              className="card--wrapper--buttons__button"
              target="_blank"
              rel="noopener noreferrer"
              href={content.github}
            >
              live view
            </a>
            <a
              className="card--wrapper--buttons__button"
              target="_blank"
              rel="noopener noreferrer"
              href={content.github}
            >
              github
            </a>
          </div>
        </div>
      </td>
    );
  });

  return (
    <>
      <div className="mobile-portfolio-content">
        <h2 className="content-name">{componentName}</h2>
        <div className="mobile-portfolio-content--wrapper">
          <div className="mobile-portfolio-content--wrapper__table">
            <table>
              <tbody>
                <tr>{cards}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePortfolio;
