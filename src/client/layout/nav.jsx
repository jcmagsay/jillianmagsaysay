import 'styles/layout/nav';

import React, {Component} from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import NavDrawer from 'layout/nav-drawer';
import Icon from 'components/icon';

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const navTriggerClasses = classNames(
      'nav__trigger',
      {
        'nav__trigger--active': this.props.isOpen
      }
    );

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
          {this.props.routes.navRoutes.map((route, i) => {
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
        <div className={navTriggerClasses}>
          <button onClick={this.props.toggleNav}>
            <Icon type="menu" />
          </button>
        </div>
      </nav>
    );
  }
}
