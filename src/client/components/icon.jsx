import React, { Component } from 'react';
import Icons from 'helpers/enums/icons';

const Icon = (props) => {
  const {
    children,
    className,
    type,
    fill,
    stroke,
  } = props;

  const IconVariant = Icons[type];

  return (
    <i className={className}>
      <IconVariant
        fill={fill}
        stroke={stroke}
      >
        {children}
      </IconVariant>
    </i>
  );
};

export default Icon;
