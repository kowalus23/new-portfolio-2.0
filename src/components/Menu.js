import React from 'react';
import { Pager } from 'react-bootstrap';
import FacebookLogo from '../assets/facebook.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import GithubLogo from '../assets/github.svg';
import { iconsStyle } from './Home';

const menuTexts = {
  home: 'Home',
  portfolio: 'Portfolio',
  contact: 'Kontakt',
};

const menuIconsStyle = {
  ...iconsStyle,
  marginTop: 0,
  height: '50px',
  width: '50px',
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  getPagesNumbers = () => {
    const { home, portfolio, contact } = menuTexts;
    const { goToPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={goToPage}>
          {i === 1 ? home : i === 2 ? portfolio : i === 3 ? contact : null}
        </Pager.Item>
      );
    }
    return [...pageNumbers];
  };

  render() {
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
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/kowalus23"
              target="_blank"
            >
              <FacebookLogo style={menuIconsStyle} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/patryk-kowalski"
              target="_blank"
            >
              <LinkedinLogo style={menuIconsStyle} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/kowalus23"
              target="_blank"
            >
              <GithubLogo style={menuIconsStyle} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
