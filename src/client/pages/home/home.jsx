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
        <div className="grid">
          <div className="grid__col">
            <Card
              title="About"
              supportingText="Want to know more about me?"
            />
          </div>
          <div className="grid__col">
            <Card
              title="Skills"
              supportingText="Curious what my strengths are?"
            />
          </div>
          <div className="grid__col">
            <Card
              title="Projects"
              supportingText="Check out some past and upcoming projects"
            />
          </div>
          <div className="grid__col">
            <Card
              title="My Idea Bucket"
              supportingText="I am full of ideas and always solving fun problems with code"
            />
          </div>
        </div>
      </Page>
    );
  }
}
