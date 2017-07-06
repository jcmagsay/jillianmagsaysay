import React, {Component} from 'react';
import Card from 'components/card';
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
        <Card
          title="CoreDial Prototype"
          supportingText="Sell, deliver, manage and invoice for cloud communications services all under your own brand."
        />
        <Card
          title={`Global Xplorer\u00B0`}
          supportingText={`The GlobalXplorer \u00B0 platform is an online platform that uses the power of the crowd to analyze the incredible wealth of satellite images currently available to archaeologists.`}
        />
        <Card
          title="10-4 Systems"
          supportingText="The Future of Tranportation"
        />
        <Card
          title="Fidelity Investments Screeners"
          supportingText="The Stock Screener is a great resource that can help you easily match your ideas with potential investments."
        />
        <Card
          title="J.P. Morgan's ADR"
          supportingText="DR Market Though Leadership"
        />
      </Page>
    );
  }
}
