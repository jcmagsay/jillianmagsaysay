/* -------------------------------  HELPERS  ------------------------------- */

const getUi = store => store.ui || {};
const getNav = store => getUi(store).nav || {};
const getHero = store => getUi(store).hero || {};

/* ------------------------------  SELECTORS  ------------------------------ */

/* ---------------  NAV  --------------- */
const selectorNavOpen = store => getNav(store).isOpen;


/* ---------------  HERO  --------------- */
const selectorHeroAnimate = store => getHero(store).animate;


export default {
  selectorNavOpen,
  selectorHeroAnimate,
};
