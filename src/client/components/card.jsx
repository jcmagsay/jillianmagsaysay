import 'styles/components/card';

import React, { Component } from 'react';
import ClassCatNode from 'atoms/ClassCatNode';
import Text from 'components/text';

const renderImage = (componentProps) => {
  const {
    altImage,
    image,
  } = componentProps;

  if (!image) return undefined;

  return(
    <img src={image} alt={`${imageAlt}-image`} />
  );
}

const renderLink = (componentProps) => {
  const {
    actions,
    linkInvisible,
  } = componentProps;

  if (linkInvisible) {
    return(
      <div className="spacer">
        Project link coming soon.
      </div>
    );
  }

  return(
    <div className="spacer">
      <a
        href={actions}
        target="_blank"
      >
        View Project
      </a>
    </div>
  );
}

const Card = (props) => {
  const {
    actions,
    align,
    caption,
    children,
    image,
    imageAlt,
    title,
    supportingText,
  } = props;

  const cardClasses = [
    'card',
    {
      [`card--${align}`]: align,
    },
  ];

  return (
    <ClassCatNode
      as="section"
      className={cardClasses}
    >
      <div className="card__title">
        <Text type="title">
          {title}
        </Text>
        {renderImage(props)}
      </div>
      <div className="card__supporting-text">
        <Text type="caption">
          {caption}
        </Text>
        <div className="spacer">
          {supportingText}
        </div>
      </div>
      <div className="card__actions">
        {renderLink(props)}
      </div>
    </ClassCatNode>
  );
};

export default Card;
