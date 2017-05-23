import React, {Component} from 'react';
import Card from 'components/card';
import Hero from 'components/hero';

export default class Home extends Component {
  constructor () {
    super();
  }

  _renderSupportingText() {
    return(
      <div>
        I'm a Senior Software Engineer, residing in the Denver Metro Area. I currently work at <a href="https://mondorobot.com/">Mondo Robot</a> in Boulder, CO building BIG, BOLD, and BADASS technology.
      </div>
    );
  }

  render() {
    return (
      <div>
        <Hero
          image={require('media/images/professional.jpg')}
          title="Hi, I'm Jill"
          supportingText={this._renderSupportingText()}
        />
        <Card
          title="about"
          supportingText="bacon ipsum"
        />
      </div>
    );
  }
}
