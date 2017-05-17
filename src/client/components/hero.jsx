import React, {Component} from 'react';
import Text from 'components/text';

export default class Hero extends Component {
  constructor () {
    super();
  }

  render() {
    const { children, title, supportingText } = this.props;

    return (
      <section className="hero">
        <div className="hero__avatar">
          <img className="hero__image" src={require('media/images/professional.jpg')} />
        </div>
        <div className="hero__details">
          <Text
            tag="h2"
            type="display-xl"
          >{title}</Text>
          <Text
            tag="h3"
            type="display-sm"
          >{supportingText}</Text>
        </div>
      </section>
    );
  }
}
