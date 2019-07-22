import React from "react"
import {Pager} from "react-bootstrap";
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  getPagesNumbers = () => {
    const {goToPage} = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={goToPage}>
          {i === 1 ? 'Home' : (i === 2) ? 'Portfolio' : (i === 3) ? 'Kontakt' : null}
        </Pager.Item>
      )
    }
    return [...pageNumbers];
  };

  render() {
    const {style, button, keyHandler} = this.props;
    let pagesNumbers = this.getPagesNumbers();
    return (
      <div className="menu-desktop" style={{...style}}>
        <h1>Menu</h1>
        <div role="button" tabIndex="0" className="hamburger-menu"
             onKeyPress={keyHandler}
             onClick={() => button}>
          Hamburger
        </div>
        <Pager>
          {pagesNumbers}
        </Pager>
      </div>
    );
  }
}

Menu.propTypes = {
  goToPage: PropTypes.func,
  button: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  keyHandler: PropTypes.func,
};

Menu.defaultProps = {
  goToPage: PropTypes.func,
  button: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  keyHandler: PropTypes.func,
};

export default Menu
