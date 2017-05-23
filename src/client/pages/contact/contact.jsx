import React, {Component} from 'react';
import Page from 'components/page';

export default class Contact extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/chomps.png')}
        heroTitle="Contact"
        heroSupportingTxt="Want to play? Have a bone to pick?">
         About section
      </Page>
    );
  }
}
