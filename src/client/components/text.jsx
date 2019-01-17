import 'styles/components/text';

import React, { Component } from 'react';
import cx from 'classcat';

export default class Text extends Component {
  constructor () {
    super();
  }

  render() {
    const { align, children, className, color, tag, type, weight, underlined } = this.props;
    const TagVariant = tag || 'div';
    const textClasses = cx([
      'text',
      {
        [`text--${align}`]: align,
        [`text--${color}`]: color,
        [`text--${type}`]: type,
        [`text--${weight}`]: weight,
        [`text--underlined`]: underlined,
      },
      className,
    ]);

    return (
      <TagVariant className={textClasses}>
        {children}
      </TagVariant>
    );
  }
}
