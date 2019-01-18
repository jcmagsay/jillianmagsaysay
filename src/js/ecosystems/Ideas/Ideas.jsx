import React, { Component } from 'react';
import Page from 'Environment/Page/Page';
import Text from 'Atoms/Text/Text';

const introduction = `My Idea Bucket is a place where I can experiment and use my creativity without limits or boundaries.`
const description = `At work, we're all held back by timelines and budget constraints. At home, I can determine when a project is complete, experiment with new technologies, and use my talents at maximum potential.`;

const heroImage = require('Media/images/ideas.png');

const Ideas = () => (
  <Page
    heroImage={heroImage}
    heroTitle="Idea Bucket"
    heroSupportingTxt="Knowledge is not power. It's only potential power. Action is power."
  >
    <Text type="headline">
      {introduction}
    </Text>
    <Text type="headline">
      {description}
    </Text>
    <Text type="subheading">
      Check back soon to view my recent experiments.
    </Text>
  </Page>
);

export default Ideas;
