import 'styles/components/card';

import React, { Component } from 'react';
import classNames from 'classnames';
import Text from 'components/text';

export default class Card extends Component {
  constructor () {
    super();
  }

  _renderImage() {
    if (!this.props.image) return;
    return(
      <img src={this.props.image} alt={`${this.props.imageAlt}-image`} />
    );
  }

  _renderLink() {
    if (this.props.linkInvisible) {
      return(
        <div className="spacer">Project link coming soon.</div>
      );
    }

    return(
      <div className="spacer">
        <a href={this.props.actions} target="_blank">View Project</a>
      </div>
    );
  }

  render() {
    const { actions, align, caption, children, image, imageAlt, title, supportingText } = this.props;
    const cardClasses = classNames(
      'card',
      {
        [`card--${align}`]: align
      }
    );
    return (
      <section className={cardClasses}>
        <div className="card__title">
          <Text type="title">
            {title}
          </Text>
          {this._renderImage()}
        </div>
        <div className="card__supporting-text">
          <Text type="caption">
            {caption}
          </Text>
          <div className="spacer">{supportingText}</div>
        </div>
        <div className="card__actions">
          {this._renderLink()}
        </div>
      </section>
    );
  }
}
