import React from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import routes from 'Routes/routes';
import Footer from 'Environment/Footer/Footer';
import Nav from 'Environment/Nav/Nav';
import NavDrawer from 'Environment/NavDrawer/NavDrawer';
import 'Environment/Favicons/Favicons';

import {
  uiActions,
  uiSelectors,
} from 'Ducks/ui';

const toggleNav = () => {
  navOpen = !navOpen;
};

const Main = (props) => {
  const {
    navOpen,
    toggleNav,
  } = props;

  return (
    <Router>
      <div className="site">
        <header role="banner">
          <Nav
            isOpen={navOpen}
            routes={routes}
            toggleNav={toggleNav}
          />
          <NavDrawer
            isOpen={navOpen}
            routes={routes}
            toggleNav={toggleNav}
          />
        </header>
        <main id="main" role="main">
          <Switch>
            {routes.all.map((route, i) =>
              <Route
                exact
                key={`route-${i}`}
                path={route.path}
                render={props => {
                  return (
                    <route.component {...props} />
                  )
                }}
              />
            )}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  navOpen: uiSelectors.selectorNavOpen(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    toggleNav(isOpen) {
      dispatch(uiActions.toggleNav({
        isOpen,
      }));
    },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
