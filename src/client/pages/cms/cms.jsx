import React, {Component} from 'react';
import ListItem from 'components/list-item';
import Page from 'components/page';
import Text from 'components/text';

export default class Cms extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/beer-enthusiast.png')}
        heroTitle="CMS"
        heroSupportingTxt="Add Data by using this page"
      >
        Successful auth
      </Page>
    );
  }
}
