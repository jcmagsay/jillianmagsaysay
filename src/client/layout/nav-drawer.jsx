import 'styles/layout/nav-drawer';

import React, { Component } from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import Icon from 'components/icon';
import Text from 'components/text';
import ClassCatNode from 'atoms/ClassCatNode';

const logo = require('media/images/logo-lg.png');

const NavDrawer = (props) => {
  const {
    children,
    isOpen,
    routes,
    toggleNav,
  } = props;

  return (
    <ClassCatNode
      as="section"
      className={[
        'nav-drawer',
        {
          'nav-drawer--open': isOpen,
        },
      ]}
    >
      <div className="nav-drawer__header">
        <NavLink
          exact
          className="nav-drawer__logo"
          onClick={toggleNav}
          to="/"
        >
          <img src={logo} height="100" />
        </NavLink>
      </div>
      <ul className="nav-drawer__list">
        {routes.navRoutes.map((route, i) => {
          return (
            <li
              className="nav-drawer__list-item"
              key={`navlink-${i}`}
            >
              <NavLink
                exact
                className="nav-drawer__link"
                activeClassName="nav-drawer__link--active"
                onClick={toggleNav}
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
      <ClassCatNode
        as="button"
        className={[
          'nav-drawer__close',
          {
            'nav-drawer__close--active': isOpen,
          },
        ]}
        onClick={toggleNav}
      >
        <Icon type="x" />
      </ClassCatNode>
    </ClassCatNode>
  );
};

export default NavDrawer;
