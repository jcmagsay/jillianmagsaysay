import React, {Component} from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import Icon from 'components/icon';

export default class NavDrawer extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, routes } = this.props;
    const drawerClasses = classNames(
      'nav-drawer',
      {
        'nav-drawer--open': this.props.isOpen
      }
    );

    return (
      <section className={drawerClasses}>
        <NavLink
          exact
          className="nav-drawer__logo"
          to="/"
        >
          <img src={require('media/images/logo-lg.png')} height="100" />
        </NavLink>
        <ul className="nav-drawer__list">
          {this.props.routes.navRoutes.map((route, i) => {
            return (
              <li
                className="nav-drawer__list-item"
                key={`navlink-${i}`}
              >
                <NavLink
                  exact
                  className="nav-drawer__link"
                  activeClassName="nav-drawer__link--active"
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button onClick={this.props.toggleNav}>
          <Icon type="x" />
        </button>
      </section>
    );
  }
}
