import React from 'react';
import cx from 'classcat';
import PropTypes from 'prop-types';


const componetPropTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape(),
      ]),
    ),
    PropTypes.string,
  ]).isRequired,
};

const componentDefaultProps = {
  as: undefined,
  children: undefined,
}

const ClassCatNode = (props) => {
  const {
    as,
    className,
    children,
    ...rest
  } = props;

  const Element = as || 'div';

  const classes = cx(className);

  return (
    <Element
      className={classes}
      {...rest}
    >
      {children}
    </Element>
  );

};

ClassCatNode.propTypes = componetPropTypes;
ClassCatNode.defaultProps = componentDefaultProps;

export default ClassCatNode;
