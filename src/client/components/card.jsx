import React, {Component} from 'react';
import Text from 'components/text';

export default class Card extends Component {
  constructor () {
    super();
  }

  render() {
    const { actions, children, title, supportingText } = this.props;

    return (
      <section className="card">
        <div className="card__title">
          <Text type="title">
            {title}
          </Text>
        </div>
        <div className="card__supporting-text">
          {supportingText}
        </div>
        <div className="card__actions">
          {actions}
        </div>
      </section>
    );
  }
}
