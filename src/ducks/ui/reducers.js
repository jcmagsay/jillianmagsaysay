import { combineReducers } from 'redux';
import types from './types';

const navReducer = (state, action) => {
  const {
    payload,
    type,
  } = action;

  switch (type) {
    case types.NAV_TOGGLE:
      return payload;
    default:
      return { isOpen: false };
  }
};


const heroReducer = (state, action) => {
  const {
    payload,
    type,
  } = action;

  switch (type) {
    case types.HERO_ANIMATE:
      return payload;
    default:
      return state ? state : {
        animate: false,
      };
  }
}


const uiReducers = combineReducers({
  hero: heroReducer,
  nav: navReducer,
});

export default uiReducers;
