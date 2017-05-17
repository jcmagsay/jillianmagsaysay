import React, {Component} from 'react';
import classNames from 'classnames';

export default class Text extends Component {
  constructor () {
    super();
  }

  render() {
    const { align, children, color, tag, type, weight } = this.props;
    const TagVariant = tag || 'div';
    const textClasses = classNames(
      'text',
      {
        [`text--${align}`]: align,
        [`text--${color}`]: color,
        [`text--${type}`]: type,
        [`text--${weight}`]: weight
      }
    )

    return (
      <TagVariant className={textClasses}>
        {children}
      </TagVariant>
    );
  }
}
