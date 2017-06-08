import React, {Component} from 'react';
import Page from 'components/page';

export default class Ideas extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/ideas.png')}
        heroTitle="Idea Bucket"
        heroSupportingTxt="The only way to get better is to keep learning"
      >
         Coming soon, please check back soon...
      </Page>
    );
  }
}
