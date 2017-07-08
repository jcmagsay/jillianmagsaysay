import React, {Component} from 'react';
import Card from 'components/card';
import ListItem from 'components/list-item';
import Page from 'components/page';

export default class Home extends Component {
  constructor () {
    super();

    this.generateData();
  }

  generateData() {
    this.listItems = [
      {
        'avatar': 'account',
        'primaryContent': 'Want to know more about me?',
        'title': 'About',
        'url': ''
      },
      {
        'avatar': 'code',
        'primaryContent': 'Curious what my strengths are?',
        'title': 'Skills',
        'url': ''
      },
      {
        'avatar': 'briefcase',
        'primaryContent': 'Check out some past and upcoming projects',
        'title': 'Projects',
        'url': ''
      },
      {
        'avatar': 'lightbulb',
        'primaryContent': 'I am full of ideas and always solving fun problems with code',
        'title': 'Idea Bucket',
        'url': ''
      }
    ];
  }

  _renderHeroSupportingText() {
    return(
      <div>
        I'm a Senior Software Engineer, residing in the Denver Metro Area. I currently work at <a href="http://mondorobot.com/">Mondo Robot</a> in Boulder, CO building BIG, BOLD, and BADASS technology.
      </div>
    );
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/professional-color.png')}
        heroTitle="Hi, I'm Jill"
        heroSupportingTxt={this._renderHeroSupportingText()}
      >
        <div className="grid">
          {this.listItems.map((listItem, i) => {
            return(
              <div className="grid__col" key={`list-item-${i}`}>
                <ListItem
                  actions=""
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
