import React, {Component} from 'react';
import ListItem from 'components/list-item';
import Page from 'components/page';
import Text from 'components/text';

export default class About extends Component {
  constructor () {
    super();

    this.generateData();
  }

  generateData() {
    this.professionalData = [
      {
        'avatar': 'keyboard',
        'primaryContent': ``,
        'title': 'Software Engineer'
      },
      {
        'avatar': 'thumbs-up',
        'primaryContent': ``,
        'title': 'Mentor'
      }
    ];

    this.personalData = [
      {
        'avatar': 'ball',
        'primaryContent': ``,
        'title': 'Athlete'
      },
      {
        'avatar': 'food',
        'primaryContent': ``,
        'title': 'Amateur Chef'
      },
      {
        'avatar': 'beer',
        'primaryContent': ``,
        'title': 'Homebrewer'
      }
    ];
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/beer-enthusiast.png')}
        heroTitle="Who am I?"
        heroSupportingTxt="Softball player/coach, sports enthusiast, beer lover, amateur chef, mentor, and software engineer"
      >
        <Text type="display-sm" underlined>Professional</Text>
        <div className="grid">
          {this.professionalData.map((listItem, i) => {
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
        <Text type="display-sm" underlined>Personal</Text>
        <div className="grid">
          {this.personalData.map((listItem, i) => {
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
      </Page>
    );
  }
}
