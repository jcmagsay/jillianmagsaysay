import React, {Component} from 'react';
import Card from 'components/card';
import Page from 'components/page';

export default class Home extends Component {
  constructor () {
    super();
  }

  _renderHeroSupportingText() {
    return(
      <div>
        I'm a Senior Software Engineer, residing in the Denver Metro Area. I currently work at <a href="https://mondorobot.com/">Mondo Robot</a> in Boulder, CO building BIG, BOLD, and BADASS technology.
      </div>
    );
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/professional-color.png')}
        heroTitle="Hi, I'm Jill"
        heroSupportingTxt={this._renderHeroSupportingText()}
      >
        <Card
          title="About"
          supportingText="Want to know more about me?"
        />
        <Card
          title="Skills"
          supportingText="Curious what my strengths are?"
        />
        <Card
          title="Projects"
          supportingText="Check out some past and upcoming projects"
        />
        <Card
          title="My Idea Bucket"
          supportingText="I am full of ideas and always solving fun problems with code"
        />
      </Page>
    );
  }
}
