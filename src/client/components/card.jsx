import React, {Component} from 'react';
import Text from 'components/text';

export default class Card extends Component {
  constructor () {
    super();
  }

  render() {
    const { children, title, supportingText } = this.props;

    return (
      <section className="card">
        {title}
      </section>
    );
  }
}
