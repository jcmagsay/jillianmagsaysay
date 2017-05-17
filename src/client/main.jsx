import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import routes from 'routes/routes';
import Footer from 'layout/footer/footer';
import Nav from 'layout/nav/nav';
import 'layout/head/favicons';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="site">
          <header role="banner">
            <Nav />
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
  }
}
