import React, {Component} from 'react';
import Text from 'components/text';

export default class Card extends Component {
  constructor () {
    super();
  }

  _renderImage(image, imageAlt) {
    if (!image) return;
    return(
      <img src={image} alt={`${imageAlt}-image`} />
    );
  }

  render() {
    const { actions, children, image, imageAlt, title, supportingText } = this.props;

    return (
      <section className="card">
        <div className="card__title">
          <Text type="title">
            {title}
          </Text>
          {this._renderImage(image, title)}
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
