import React, {Component} from 'react';
import ListItem from 'components/list-item';
import Page from 'components/page';
import Text from 'components/text';

const listItems = [
  {
    'avatar': 'building',
    'primaryContent': `Looking for a Senior Software Engineer at your company?`,
    'title': 'Employer',
  },
  {
    'avatar': 'glasses',
    'primaryContent': `Need to get a customized site up and running in no time?`,
    'title': 'Freelance',
  },
  {
    'avatar': 'partner',
    'primaryContent': 'Need a Front-End specialist to collaborate on a project?',
    'title': 'Partner',
  },
];

const heroImage = require('media/images/chomps.png');

const Contact = () => {
  return (
    <Page
      heroImage={heroImage}
      heroTitle="Contact"
      heroSupportingTxt="Have a bone to pick?"
    >
      <div className="grid">
        {listItems.map((listItem, i) => {
          return(
            <div className="grid__col" key={`list-item-${i}`}>
              <ListItem
                externalLink={listItem.url}
                avatar={listItem.avatar}
                title={listItem.title}
                primaryContent={listItem.primaryContent}
              />
          </div>
          );
        })}
      </div>
      <Text type="headline" align="centered">
        <div>I'd love to hear from you!</div>
        Shoot me an email at <a href="mailto:jcmagsay@gmail.com">jcmagsay@gmail.com</a>
      </Text>
    </Page>
  );
};

export default Contact;
