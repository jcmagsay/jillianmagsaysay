import React, {Component} from 'react';
import Page from 'components/page';
import Text from 'components/text';

export default class Resume extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/resume.png')}
        heroTitle="Software Engineer"
        heroSupportingTxt="Life experience is what makes us who we are"
      >
        <Text type="headline" align="centered">
          ***CV is currently out of date and will be updated soon.***
        </Text>
        <div className="grid">
          <div className="grid__col">
            <img width="90%" src={require('media/images/cv.png')} alt="Jill Resume" />
          </div>
        </div>
      </Page>
    );
  }
}
