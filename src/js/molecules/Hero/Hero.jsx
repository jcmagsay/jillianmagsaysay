import './Hero.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux'

import ClassCatNode from 'Atoms/ClassCatNode/ClassCatNode';
import Text from 'Atoms/Text/Text';

import {
  uiActions,
  uiSelectors,
} from 'Ducks/ui';


const Hero = (props) => {
  const {
    animate,
    animateHero,
    children,
    image,
    title,
    supportingText,
  } = props;

  setTimeout(() => animateHero(true), 200);

  return (
    <section className="hero">
      <div className="hero__avatar">
        <ClassCatNode
          as="img"
          className={[
            'hero__image',
            'fadeIn',
            {
              'fadingIn': animate,
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
              'fadingLeft': animate,
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

const mapStateToProps = state => ({
  animate: uiSelectors.selectorHeroAnimate(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    animateHero(animate) {
      dispatch(uiActions.animateHero({
        animate,
      }));
    },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
