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
        'primaryContent': `Want to know more about me? While I'm a professional software engineer, I participate in many local activities in my community.`,
        'title': 'About',
        'url': '/about'
      },
      {
        'avatar': 'briefcase',
        'primaryContent': `Interested in what professional projects I've worked on? Check out my past and upcoming projects.`,
        'title': 'Projects',
        'url': '/projects'
      },
      {
        'avatar': 'code',
        'primaryContent': 'Curious what my strengths are? I have experience writing enterprise software in several languages.',
        'title': 'Skills',
        'url': '/resume'
      },
      {
        'avatar': 'lightbulb',
        'primaryContent': `With ever-changing technology, I'm always looking for ways to explore new programming languages, design patterns, and architectural approaches. My idea bucket is a way of transforming my creativity to solve fun problems with code.`,
        'title': 'Idea Bucket',
        'url': '/ideas'
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
