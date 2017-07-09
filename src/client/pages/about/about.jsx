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
        'primaryContent': `As a professional, I'm a Senior Software engineer. I specialize in Front-End Engineering. Clean code, high-quality architecture, and appropriate documentation are my top priorities when implementing solutions. I'm interested in all tech industries and the engineering lifestyle that comes with digital agencies.`,
        'title': 'Software Engineer'
      },
      {
        'avatar': 'thumbs-up',
        'primaryContent': `In Boulder, CO, a community innondated with tech folk alike, I've had several opportunities to mentor engineers that are young in their careers. My mentoring style consists of code reviews, coffee shop pep talks, sharing my experiences, and encouraging my mentees to set and achieve their goals.`,
        'title': 'Mentor'
      }
    ];

    this.personalData = [
      {
        'avatar': 'ball',
        'primaryContent': `Living in one of the fittest cities in the world, I'm constantly pushing my athleticism to my max potential. A healthy lifestyle and exercise contribute to my strong and focused work ethic. I play several team sports in Boulder, CO and also enjoy riding my road bike in town and up Flagstaff when I'm up for a challenge.`,
        'title': 'Athlete'
      },
      {
        'avatar': 'food',
        'primaryContent': `Food fuels my potential and determination. When I lived in Chicago, I had the pleasure of working at Pastoral -- a beer, cheese, and wine shop -- which exposed me to a whole new foodie community. While working at Pastoral, I met several 4-5 star chefs, staged in their kitchens, and tried food I never knew existed. I've never let my desire to challenge myself cooking amazingly intricate meals, as well as tasting new cuisines and exotic menu items that I previously would not dare attempt previously.`,
        'title': 'Amateur Chef'
      },
      {
        'avatar': 'beer',
        'primaryContent': `I credit my brother-in-law and Pastoral for introducing me to Craft Beer. Over the years, I've developed a palette for tasting different styles of beer and being able to differentiate them by color, smell, and flavor profile. As I developed these tastes, I needed to take on a new challenge, homebrewing. Homebrewing is surprisingly rewarding when the output is drinkable. If you're a fellow homebrewer, you know exactly what I'm talking about. While I'm not nearly as passionate about homebrewing as I am cooking, I still love sitting in a camping chair in my driveway creating some tastey wort in my 10 gallon brew kettle.`,
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
