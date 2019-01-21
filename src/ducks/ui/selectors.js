
/* -------------------------------  HELPERS  ------------------------------- */

const getUi = store => store.ui || {};
const getNav = store => getUi(store).nav || {};

/* ------------------------------  SELECTORS  ------------------------------ */

const selectorNavOpen = store => getNav(store).isOpen;


export default {
  selectorNavOpen,
};
