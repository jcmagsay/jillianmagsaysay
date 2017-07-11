import React, {Component} from 'react';
import classNames from 'classnames';
import Text from 'components/text';

export default class Hero extends Component {
  constructor () {
    super();

    this.state = {
      'animateText': false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        'animateText': true
      });
    }, 200);
  }

  render() {
    const { children, image, title, supportingText } = this.props;

    const titleClasses = classNames(
      'canFade',
      {
        'isFading': this.state.animateText
      }
    );

    return (
      <section className="hero">
        <div className="hero__avatar">
          <img className="hero__image" src={image} />
        </div>
        <div className="hero__details">
          <Text
            className={titleClasses}
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
