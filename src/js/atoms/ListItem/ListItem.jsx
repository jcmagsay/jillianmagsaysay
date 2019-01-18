import './ListItem.scss';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'Atoms/Icon/Icon';
import Text from 'Atoms/Text/Text';

const renderActions = (componentProps) => {
  const {
    externalLink,
  } = componentProps;
  if (!externalLink) return undefined;

  return(
    <div className="list__item-actions">
      <NavLink
        exact
        to={externalLink}
      >
        Learn More
      </NavLink>
    </div>
  );
};

const ListItem = (props) => {
  const {
    avatar,
    children,
    externalLink,
    primaryContent,
    secondaryContent,
    title,
  } = props;

  return (
    <li className="list__item">
      <div className="list__item-avatar">
        <Icon type={avatar} />
      </div>
      <div className="list__item-title">
        <Text type="display-sm" align="centered">
          {title}
        </Text>
      </div>
      <div className="list__item-primary-content">
        {primaryContent}
      </div>
      {renderActions(props)}
    </li>
  );
};

export default ListItem;
