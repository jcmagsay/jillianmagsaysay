import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import routes from 'routes/routes';
import Footer from 'layout/footer';
import Nav from 'layout/nav';
import NavDrawer from 'layout/nav-drawer';
import 'layout/favicons';

let navOpen = false;

const toggleNav = () => {
  navOpen = !navOpen;
};

const Main = () => (
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

export default Main;
