import React from 'react';
import { Pager } from 'react-bootstrap';

const menuTexts = {
  home: 'Home',
  portfolio: 'Portfolio',
  contact: 'Kontakt',
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
            <p>Facebook</p>
            <p>Linkedin</p>
            <p>Github</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
