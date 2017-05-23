import React, {Component} from 'react';
import Page from 'components/page';

export default class About extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/beer-enthusiast.png')}
        heroTitle="Who am I?"
        heroSupportingTxt="Softball player/coach, sports enthusiast, beer lover, amateur chef, mentor, and software engineer"
      >
         Coming soon, please check back soon...
      </Page>
    );
  }
}
