import React, { Component } from 'react';
import Icons from 'helpers/enums/icons';

export default class Icon extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, className, type, fill, stroke } = this.props;
    const IconVariant = Icons[type];
    return (
      <i className={className}>
        <IconVariant fill={fill} stroke={stroke}>
          {children}
        </IconVariant>
      </i>
    );
  }
}
