import 'styles/layout/footer';

import React, { Component } from 'react';
import Icon from 'components/icon';

const Footer = () => (
  <footer className="footer">
    &#169;2019 Jillian Magsaysay
    <div className="flex--end flex--1">
      <a
        href="https://github.com/jcmagsay"
        target="_blank"
      >
        <Icon type="github" />
      </a>
      <a
        className="mar--l-1"
        href="https://twitter.com/beerbizzo"
        target="_blank"
      >
        <Icon type="twitter" />
      </a>
    </div>
  </footer>
);

export default Footer;
