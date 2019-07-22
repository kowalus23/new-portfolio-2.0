import React from "react"
import ReactPageScroller from "react-page-scroller";

import Home from "../components/Home"
import SEO from "../components/seo"
import Menu from "../components/Menu";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      windowWidth: window.innerWidth,
      trigger: false,
      close: {transform: 'translateX(350px)'},
      open: {transform: 'translateX(0)', visibility: 'visible'}
    };
    this._pageScroller = null;
  }

  buttonHandler = () => {
    const triggerer = this.state.trigger;
    this.setState({
      trigger: !triggerer
    });
  };

  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  breakPoint = () => {
    const {windowWidth} = this.state;
    if (windowWidth >= 1600) {
      return '1600px'
    } else if (windowWidth >= 1200 && windowWidth < 1600) {
      return '1200px'
    } else if (windowWidth >= 900 && windowWidth < 1200) {
      return '900px'
    } else if (windowWidth >= 600 && windowWidth < 900) {
      return '600px'
    }
  };


  render() {
    const {trigger, open, close} = this.state;
    if (this.state.windowWidth > 600) {
      return (
        <div className="app-content">
          <SEO title="Home"/>
          <Menu button={this.buttonHandler} goToPage={this.goToPage} style={trigger ? open : close}/>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange} animationTimer={500}
                             containerWidth={this.breakPoint()} containerHeight={'800px'}>
            <Home button={this.buttonHandler}/>
            <Portfolio/>
            <Contact/>
          </ReactPageScroller>
        </div>
      );
    } else {
      return (
        <div className="mobile-app-content">
          <h1>I'm mobile!</h1>
        </div>
      )
    }
  }
}

export default App
