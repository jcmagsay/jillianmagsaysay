import React, {Component} from 'react';
import Hero from 'components/hero';

export default class Home extends Component {
  constructor () {
    super();
  }

  _renderMondoLink() {
    return(
      <a href="https://mondorobot.com/">Mondo Robot</a>
    );
  }

  render() {

    const supportingText = `I'm a Senior Software Engineer, residing in the Denver Metro Area. I currently work at Mondo Robot in Boulder, CO building BIG, BOLD, and BADASS technology.`;

    return (
      <div>
        <Hero
          title="Hi, I'm Jill"
          supportingText={supportingText}
        />
      </div>
    );
  }
}
