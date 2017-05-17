import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import routes from 'routes/routes';

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          {routes.navRoutes.map((route, i) => {
            return (
              <li
                className="nav__listItem"
                key={`navlink-${i}`}
              >
                <NavLink
                  exact
                  className="nav__link"
                  activeClassName="nav__link--active"
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}
