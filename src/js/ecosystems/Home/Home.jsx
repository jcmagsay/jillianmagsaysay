import React, { Component } from 'react';
import ListItem from 'Atoms/ListItem/ListItem';
import Page from 'Environment/Page/Page';

const listItems = [
  {
    'avatar': 'account',
    'primaryContent': `Want to know more about me? While I'm a professional software engineer, I participate in many local activities in my community.`,
    'title': 'About',
    'url': '/about',
  },
  {
    'avatar': 'briefcase',
    'primaryContent': `Interested in what professional projects I've worked on? Check out my past and upcoming projects.`,
    'title': 'Projects',
    'url': '/projects',
  },
  {
    'avatar': 'code',
    'primaryContent': 'Curious what my strengths are? I have experience writing enterprise software in several languages.',
    'title': 'Experience',
    'url': '/resume',
  },
  {
    'avatar': 'lightbulb',
    'primaryContent': `With ever-changing technology, I'm always looking for ways to explore new tech. My idea bucket is a way of transforming my creativity into experimental code solutions.`,
    'title': 'Idea Bucket',
    'url': '/ideas',
  },
];

const renderHeroSupportingText = () => (
  <div>
    I'm a Senior Software Engineer, residing in the Denver Metro Area. I currently work at <a href="https://www.slalombuild.com/">Slalom Build</a> in Denver, CO building BADASS technology.
  </div>
);

const heroImage = require('Media/images/professional-color.png');

const Home = () => (
  <Page
    heroImage={heroImage}
    heroTitle="Hi, I'm Jill"
    heroSupportingTxt={renderHeroSupportingText()}
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
  </Page>
);

export default Home;
