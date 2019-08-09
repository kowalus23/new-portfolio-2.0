import React from 'react';
import ReactPageScroller from 'react-page-scroller';

import Home from './Desktop/Home';
import Menu from './Desktop/Menu';
import Portfolio from './Desktop/Portfolio';
import Contact from './Desktop/Contact';

import '../../css/reset.scss';
import '../../css/themes/vintage.scss';
import '../../css/components/App.scss';

import MobileHome from './Mobile/MobileHome';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      windowWidth: 1920,
      toggle: false,
      isLoading: true,
      hide: null,
      currentTheme: '',
      close: { transform: 'translateX(350px)' },
      open: { transform: 'translateX(0)', visibility: 'visible' },
    };

    this._pageScroller = null;
    this._isMounted = false;
  }

  componentWillMount() {
    typeof window !== 'undefined' &&
      window.localStorage.getItem('currentTheme') &&
      this.setState({
        currentTheme: JSON.parse(window.localStorage.getItem('currentTheme')),
      });
  }

  componentDidMount() {
    typeof window !== 'undefined' &&
      window.localStorage.getItem('currentTheme') &&
      this.setState({
        currentTheme: JSON.parse(window.localStorage.getItem('currentTheme')),
      });

    this.setState({
      isLoading: false,
    });

    this._isMounted = true;

    const updateWidth = window.innerWidth;
    this.setState({
      windowWidth: updateWidth,
    });

    window.onresize = () => {
      if (this._isMounted) {
        this.setState({ windowWidth: window.innerWidth });
      }
    };
  }

  componentWillUpdate(nextProps, nextState) {
    window.localStorage.setItem(
      'currentTheme',
      JSON.stringify(nextState.currentTheme)
    );
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

  hideHandler = () => {
    this.setState({
      hide: {
        top: '-190px',
        animation: 'none',
        visibility: 'hidden',
      },
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

  changeTheme = theme => {
    this.setState({
      currentTheme: theme,
    });
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
    const {
      toggle,
      open,
      close,
      windowWidth,
      currentPage,
      hide,
      isLoading,
      currentTheme,
    } = this.state;

    if (windowWidth > 600) {
      return isLoading ? (
        <div className={`app-content ${currentTheme}`}>
          <div className="loader" />
        </div>
      ) : (
        <div className={`app-content ${currentTheme}`}>
          <div className="themes-button">
            <div className="themes-list">
              <div
                role="button"
                tabIndex={-2}
                onKeyPress={() => this.changeTheme('')}
                onClick={() => this.changeTheme('')}
                className="default-theme"
              >
                <p>default</p>
              </div>
              <div
                role="button"
                tabIndex={-2}
                onKeyPress={() => this.changeTheme('theme-vintage')}
                onClick={() => this.changeTheme('theme-vintage')}
                className="vintage-theme"
              >
                <p>vintage</p>
              </div>
            </div>
            <div className="themes-button--title">
              <small>Themes</small>
            </div>
          </div>
          <div className="helper-info" style={hide}>
            <h1 className="helper-info--text">
              You need to focus or hover main component to make scroll, keys or
              touch work
            </h1>
            <div
              onClick={this.hideHandler}
              role="button"
              onKeyPress={this.hideHandler}
              tabIndex={-2}
              className="hide"
            >
              Close
            </div>
          </div>
          <Menu
            button={this.buttonHandler}
            goToPage={this.goToPage}
            style={toggle ? open : close}
          />
          <div className="component-wrapper-shadow">
            <ReactPageScroller
              ref={c => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
              animationTimer={500}
              transitionTimingFunction="ease-in-out"
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
