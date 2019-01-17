import 'styles/components/list-item';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/icon';
import Text from 'components/text';

export default class ListItem extends Component {
  constructor () {
    super();
  }

  _renderActions() {
    if (!this.props.externalLink) return;
    return(
      <div className="list__item-actions">
        <NavLink
          exact
          to={this.props.externalLink}
        >
          Learn More
        </NavLink>
      </div>
    );
  }

  render() {
    const { avatar, children, externalLink, primaryContent, secondaryContent, title } = this.props;

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
        {this._renderActions()}
      </li>
    );
  }
}
