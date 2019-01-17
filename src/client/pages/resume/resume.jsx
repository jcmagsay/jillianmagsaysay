import React, {Component} from 'react';
import Page from 'components/page';
import Text from 'components/text';

const Resume = () => {
  return (
    <Page
      heroImage={require('media/images/resume.png')}
      heroTitle="Software Engineer"
      heroSupportingTxt="Life experience is what makes us who we are"
    >
      <Text type="headline" align="centered">
        ***Click to download***
      </Text>
      <div className="grid">
        <div className="grid__col">
          <a href={require('media/documents/magsaysay_cv.pdf')} target="_blank">
            <img width="50%" src={require('media/images/cv.png')} alt="Jill Resume" />
          </a>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
