import './Text.scss';

import React, { Component } from 'react';
import cx from 'classcat';

const Text = (props) => {
  const {
    align,
    children,
    className,
    color,
    tag,
    type,
    weight,
    underlined,
  } = props;

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
};

export default Text;
