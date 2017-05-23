import React, {Component} from 'react';
import Page from 'components/page';

export default class Projects extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/aesthetics.png')}
        heroTitle="Street Cred"
        heroSupportingTxt="Would buttercream be as good without the butter?"
      >
         Coming soon, please check back soon...
      </Page>
    );
  }
}
