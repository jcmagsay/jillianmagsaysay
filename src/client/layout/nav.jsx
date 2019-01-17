import 'styles/layout/nav';

import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NavDrawer from 'layout/nav-drawer';
import Icon from 'components/icon';
import ClassCatNode from 'atoms/ClassCatNode';

const logo = require('media/images/logo.png');

const Nav = (props) => {
  const {
    isOpen,
    toggleNav,
    routes,
  } = props;

  return (
    <nav className="nav">
      <NavLink
        exact
        className="nav__logo"
        to="/"
      >
        <img src={logo} height="50" />
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
      <ClassCatNode
        className={[
          'nav__trigger',
          {
            'nav__trigger--active': isOpen,
          },
        ]}
      >
        <button onClick={toggleNav}>
          <Icon type="menu" />
        </button>
      </ClassCatNode>
    </nav>
  );
};

export default Nav;
