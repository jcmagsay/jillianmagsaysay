import React, {Component} from 'react';
import Page from 'components/page';
import Text from 'components/text';

const introduction = `My Idea Bucket is a place where I can experiment and use my creativity without limits or boundaries.`
const description = `At work, we're all held back by timelines and budget constraints. At home, I can determine when a project is complete, experiment with new technologies, and use my talents at maximum potential.`;

const Ideas = () => (
  <Page
    heroImage={require('media/images/ideas.png')}
    heroTitle="Idea Bucket"
    heroSupportingTxt="Knowledge is not power. It's only potential power. Action is power."
  >
    <Text type="headline">
      {this.introduction}
    </Text>
    <Text type="headline">
      {this.description}
    </Text>
    <Text type="subheading">
      Check back soon to view my recent experiments.
    </Text>
  </Page>
);

export default Ideas;
