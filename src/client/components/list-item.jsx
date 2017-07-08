import React, {Component} from 'react';
import Icon from 'components/icon';
import Text from 'components/text';

export default class ListItem extends Component {
  constructor () {
    super();
  }

  render() {
    const { actions, avatar, children, primaryContent, secondaryContent, title } = this.props;

    return (
      <li className="list__item">
        <div className="list__item-avatar">
          <Icon type={avatar} />
        </div>
        <div className="list__item-title">
          <Text type="headline" align="centered">
            {title}
          </Text>
        </div>
        <div className="list__item-primary-content">
          {primaryContent}
        </div>
        <div className="list__item-actions">
          {actions}
        </div>
      </li>
    );
  }
}
