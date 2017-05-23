import React, {Component} from 'react';
import Page from 'components/page';

export default class Resume extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/resume.png')}
        heroTitle="Software Engineer"
        heroSupportingTxt="If you want to be formal">
         About section
      </Page>
    );
  }
}
