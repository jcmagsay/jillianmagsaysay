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
          {/* TODO: Fix and update this to be full page */}
          <object
            data={require('media/documents/magsaysay_cv.pdf')}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <a href={require('media/documents/magsaysay_cv.pdf')} target="_blank">
              <p>
                Your browser does not support PDFs.
              </p>
            </a>
          </object>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
