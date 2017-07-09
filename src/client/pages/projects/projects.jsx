import React, {Component} from 'react';
import Card from 'components/card';
import Page from 'components/page';
import Text from 'components/text';

export default class Projects extends Component {
  constructor () {
    super();

    this.generateData();
  }

  generateData() {
    this.futureProjects = [
      {
        'description': `Customized Rider Portal for Cyclists based on true body measurement data.`,
        'linkInvisible': true,
        'name': 'Retul Rider Portal',
        'role': 'Tech Lead, Front-End Engineering'
      }
    ];

    this.pastProjects = [
      {
        'description': 'Web app for Comcast customers to organize call flow systems.',
        'linkInvisible': true,
        'name': 'Comcast SIMON',
        'role': 'Support Tech Lead, Front-End Engineering'
      },
      {
        'description': 'Sell, deliver, manage and invoice for cloud communications services all under your own brand.',
        'linkInvisible': true,
        'name': 'CoreDial Prototype',
        'role': 'Tech Lead, Front-End Engineering'
      },
      {
        'actions': 'http://globalxplorer.org/',
        'description': `The GlobalXplorer\u00B0 platform is an online platform that uses the power of the crowd to analyze the incredible wealth of satellite images currently available to archaeologists.`,
        'name': `Global Xplorer\u00B0`,
        'role': 'Tech Lead, Front-End & Middleware Engineering'
      },
      {
        'actions': 'https://app.10-4.com/commoncontent/uicomponents',
        'description': 'The Future of Tranportation',
        'name': '10-4 Systems',
        'role': 'Full Stack Engineer, UI/UX Engineer Lead',
        'url': 'https://app.10-4.com/commoncontent/uicomponents'
      },
      {
        'actions': 'https://research2.fidelity.com/pi/stock-screener',
        'description': 'The Stock Screener is a great resource that can help you easily match your ideas with potential investments.',
        'name': 'Fidelity Screeners',
        'role': 'Front-End & Middleware Engineer'
      },
      {
        'actions': 'https://www.adr.com/',
        'description': 'DR Market Thought Leadership',
        'name': 'J.P. Morgan ADR',
        'role': 'Front-End & Middleware Engineer'
      }
    ];
  }

  render() {
    return (
      <Page
        heroImage={require('media/images/aesthetics.png')}
        heroTitle="Street Cred"
        heroSupportingTxt="Would buttercream be as good without the butter?"
      >
        <Text type="display-sm" underlined>Upcoming Projects</Text>
        <section className="grid">
          {this.futureProjects.map((project, i) => {
            return(
              <div className="grid__col" key={`project-${i}`}>
                <Card
                  actions={project.actions}
                  align="centered"
                  caption={project.role}
                  linkInvisible={project.linkInvisible}
                  theme="secondary"
                  title={project.name}
                  supportingText={project.description}
                />
              </div>
            );
          })}
        </section>
        <Text type="display-sm" underlined>Past Projects</Text>
        <section className="grid">
          {this.pastProjects.map((project, i) => {
            return(
              <div className="grid__col" key={`project-${i}`}>
                <Card
                  actions={project.actions}
                  align="centered"
                  caption={project.role}
                  linkInvisible={project.linkInvisible}
                  theme="primary"
                  title={project.name}
                  supportingText={project.description}
                />
              </div>
            );
          })}
        </section>
      </Page>
    );
  }
}
