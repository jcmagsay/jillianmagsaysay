import React, {Component} from 'react';
import Hero from 'components/hero';

export default class Page extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, heroImage, heroTitle, heroSupportingTxt } = this.props;
    return (
      <section className="page">
        <div className="page__hero">
          <Hero
            image={heroImage}
            title={heroTitle}
            supportingText={heroSupportingTxt}
          />
        </div>
        <div className="page__content">
          {children}
        </div>
      </section>
    );
  }
}
