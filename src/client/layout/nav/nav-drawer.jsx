import React, {Component} from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import Icon from 'components/icon';
import Text from 'components/text';

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
    const drawerCloseClasses = classNames(
      'nav-drawer__close',
      { 'nav-drawer__close--active': this.props.isOpen }
    );

    return (
      <section className={drawerClasses}>
        <div className="nav-drawer__header">
          <NavLink
            exact
            className="nav-drawer__logo"
            onClick={this.props.toggleNav}
            to="/"
          >
            <img src={require('media/images/logo-lg.png')} height="100" />
          </NavLink>
        </div>
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
                  onClick={this.props.toggleNav}
                  to={route.path}
                >
                  <Text
                    tag="h5"
                    type="display-lg"
                  >{route.name}</Text>

                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          className={drawerCloseClasses}
          onClick={this.props.toggleNav}
        >
          <Icon type="x" />
        </button>
      </section>
    );
  }
}
