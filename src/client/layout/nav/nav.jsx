import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import routes from 'routes/routes';
import NavDrawer from 'layout/nav/nav-drawer';
import Icon from 'components/icon';

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="nav">
        <NavLink
          exact
          className="nav__logo"
          to="/"
        >
          <img src={require('media/images/logo.png')} height="50" />
        </NavLink>
        <ul className="nav__list">
          {routes.navRoutes.map((route, i) => {
            return (
              <li
                className="nav__list-item"
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
        <NavDrawer routes={routes} />
        <div className="nav__trigger">
          <button>
            <Icon type="menu" />
          </button>
        </div>
      </nav>
    );
  }
}
