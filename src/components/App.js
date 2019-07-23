import React from 'react';
import ReactPageScroller from 'react-page-scroller';

import Home from './Home';
import SEO from './seo';
import Menu from './Menu';
import Portfolio from './Portfolio';
import Contact from './Contact';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      windowWidth: window.innerWidth,
      toggle: false,
      close: { transform: 'translateX(350px)' },
      open: { transform: 'translateX(0)', visibility: 'visible' },
    };
    this._pageScroller = null;
  }

  componentDidMount() {
    window.onresize = () => this.setState({ windowWidth: window.innerWidth });
  }

  buttonHandler = () => {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle,
    });
  };

  pageOnChange = number => {
    this.setState({ currentPage: number });
  };

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey);
  };

  breakPoint = () => {
    const { windowWidth } = this.state;
    if (windowWidth >= 1600) {
      return '1600px';
    } else if (windowWidth >= 1200 && windowWidth < 1600) {
      return '1200px';
    } else if (windowWidth >= 900 && windowWidth < 1200) {
      return '900px';
    } else if (windowWidth >= 600 && windowWidth < 900) {
      return '600px';
    }
  };

  render() {
    const { toggle, open, close, windowWidth, currentPage } = this.state;
    if (windowWidth > 600) {
      return (
        <div className="app-content">
          <SEO title="Home" />
          <Menu
            button={this.buttonHandler}
            goToPage={this.goToPage}
            style={toggle ? open : close}
          />
          <div className="component-wrapper-shadow">
            <div className="helper-info">
              <h1 className="helper-info--text">
                You need to focus or hover main component to make scroll, keys
                or touch work
              </h1>
            </div>
            <ReactPageScroller
              ref={c => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
              animationTimer={500}
              containerWidth={this.breakPoint()}
              containerHeight="800px"
            >
              <Home currentPage={{ currentPage }} button={this.buttonHandler} />
              <Portfolio currentPage={{ currentPage }} />
              <Contact currentPage={{ currentPage }} />
            </ReactPageScroller>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mobile-app-content">
          <h1>Im mobile!</h1>
        </div>
      );
    }
  }
}

export default App;
