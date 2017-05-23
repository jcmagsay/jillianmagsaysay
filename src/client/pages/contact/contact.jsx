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
        heroSupportingTxt="Want to play? Have a bone to pick?"
      >
        <div>
          Would I be a good fit at your company? Would you like me to work on a freelance project for you? I'd love to hear from you. Shoot me an email at <a href="mailto:jcmagsay@gmail.com">jcmagsay@gmail.com</a>.
        </div>
      </Page>
    );
  }
}
