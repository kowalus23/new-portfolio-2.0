import React from 'react';
import { Pager } from 'react-bootstrap';
import FacebookLogo from '../../../assets/facebook.svg';
import LinkedinLogo from '../../../assets/linkedin.svg';
import GithubLogo from '../../../assets/github.svg';
import { iconLinks, menuIconsStyle } from '../../additional-variables';
import { menuTexts } from '../../component-texts';

class Menu extends React.Component {

  getPagesNumbers = () => {
    const { home, portfolio, contact } = menuTexts;
    const { goToPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} tabIndex="-1" eventKey={i - 1} onSelect={goToPage}>
          {i === 1 ? home : i === 2 ? portfolio : i === 3 ? contact : null}
        </Pager.Item>
      );
    }
    return [...pageNumbers];
  };

  render() {
    const { github, linkedin, facebook } = iconLinks;
    const { style, button, keyHandler } = this.props;
    let pagesNumbers = this.getPagesNumbers();
    return (
      <div className="menu-desktop" style={{ ...style }}>
        <div className="menu-desktop--content">
          <div className="menu-desktop--content__top">
            <h1 className="menu-title">Menu</h1>
            <div
              role="button"
              tabIndex="0"
              className="hamburger-menu"
              onKeyPress={keyHandler}
              onClick={button}
            >
              <div className="hamburger-menu--cross" />
            </div>
          </div>
          <div className="menu-desktop--content__middle">
            <Pager>{pagesNumbers}</Pager>
          </div>
          <div className="menu-desktop--content__bottom">
            <a rel="noopener noreferrer" href={facebook} target="_blank">
              <FacebookLogo style={menuIconsStyle} />
            </a>
            <a rel="noopener noreferrer" href={linkedin} target="_blank">
              <LinkedinLogo style={menuIconsStyle} />
            </a>
            <a rel="noopener noreferrer" href={github} target="_blank">
              <GithubLogo style={menuIconsStyle} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
