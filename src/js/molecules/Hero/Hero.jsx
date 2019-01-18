import './Hero.scss';

import React, { Component } from 'react';
import ClassCatNode from 'Atoms/ClassCatNode/ClassCatNode';
import Text from 'Atoms/Text/Text';

let animateText = false;

const Hero = (props) => {
  const {
    children,
    image,
    title,
    supportingText,
  } = props;

  return (
    <section className="hero">
      <div className="hero__avatar">
        <ClassCatNode
          as="img"
          className={[
            'hero__image',
            'fadeIn',
            {
              'fadingIn': animateText,
            },
          ]}
          src={image}
        />
      </div>
      <div className="hero__details">
        <Text
          className={[
            'fadeLeft',
            {
              'fadingLeft': animateText,
            },
          ]}
          tag="h2"
          type="display-xl"
        >
          {title}
        </Text>
        <Text
          tag="h3"
          type="display-sm"
        >
          {supportingText}
        </Text>
      </div>
    </section>
  );
};

Hero.componentDidMount = () => {
  setTimeout(() => {
    animateText = true;
  }, 200);
};

export default Hero;
