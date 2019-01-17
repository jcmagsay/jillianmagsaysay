import 'styles/components/page';

import React, { Component } from 'react';
import Hero from 'components/hero';

const Page = (props) => {
  const {
    children,
    heroImage,
    heroTitle,
    heroSupportingTxt,
  } = props;

  return (
    <section className="page">
      <div className="page__hero">
        <Hero
          image={heroImage}
          title={heroTitle}
          supportingText={heroSupportingTxt}
        />
      </div>
      <div className="page__content">
        {children}
      </div>
    </section>
  );
};

export default Page;
