import types from './types';

const {
  HERO_ANIMATE,
  NAV_TOGGLE,
} = types;

/* -------------------------------  NAV  ------------------------------- */

const toggleNav = (payload) => ({
  type: NAV_TOGGLE,
  payload,
});


/* -------------------------------  HERO  ------------------------------- */

const animateHero = (payload) => ({
  type: HERO_ANIMATE,
  payload,
});


/* -------------------------------  EXPORT  ------------------------------- */

export default {
  animateHero,
  toggleNav,
};
