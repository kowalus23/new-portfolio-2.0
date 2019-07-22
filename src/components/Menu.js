import React from "react"
import {Pager} from "react-bootstrap";

class Menu extends React.Component {

  getPagesNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.props.goToPage}>
          {i === 1 ? 'Home' : (i === 2) ? 'Portfolio' : (i === 3) ? 'Kontakt' : null}
        </Pager.Item>
      )
    }
    return [...pageNumbers];
  };

  render() {
    const {style} = this.props;
    let pagesNumbers = this.getPagesNumbers();
    return (
      <div className="menu-desktop" style={{...style}}>
        <h1>Menu</h1>
        <div onClick={this.props.button} className="hamburger-menu">Hamburger</div>
        <Pager>
          {pagesNumbers}
        </Pager>
      </div>
    );
  }
}

export default Menu
