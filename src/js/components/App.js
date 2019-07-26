import React from 'react';
import ReactPageScroller from 'react-page-scroller';

import Home from './Desktop/Home';
import Menu from './Desktop/Menu';
import Portfolio from './Desktop/Portfolio';
import Contact from './Desktop/Contact';

import '../../css/components/App.scss';
import MobileHome from './Mobile/MobileHome';

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
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    window.onresize = () => {
      if (this._isMounted) {
        this.setState({ windowWidth: window.innerWidth });
      }
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  buttonHandler = () => {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle,
    });
  };

  pageOnChange = number => {
    setTimeout(() => {
      this.setState({ currentPage: number });
    }, 500);
  };

  goToPage = eventKey => {
    return this._pageScroller.goToPage(eventKey);
  };

  breakPoint = () => {
    const { windowWidth } = this.state;
    if (windowWidth >= 1600) {
      return 1600;
    } else if (windowWidth >= 1200 && windowWidth < 1600) {
      return 1200;
    } else if (windowWidth >= 900 && windowWidth < 1200) {
      return 900;
    } else if (windowWidth >= 600 && windowWidth < 900) {
      return 600;
    }
  };

  render() {
    const { toggle, open, close, windowWidth, currentPage } = this.state;
    if (windowWidth > 600) {
      return (
        <div className="app-content">
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
              animationTimer={600}
              containerWidth={`${this.breakPoint()}px`}
              containerHeight="800px"
            >
              <Home
                goToPage={this.goToPage}
                currentPage={{ currentPage }}
                button={this.buttonHandler}
              />
              <Portfolio
                breakPoint={this.breakPoint}
                button={this.buttonHandler}
                goToPage={this.goToPage}
                currentPage={{ currentPage }}
              />
              <Contact
                button={this.buttonHandler}
                goToPage={this.goToPage}
                currentPage={{ currentPage }}
              />
            </ReactPageScroller>
          </div>
        </div>
      );
    } else {
      return <MobileHome />;
    }
  }
}

export default App;
