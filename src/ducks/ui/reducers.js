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
}

const uiReducers = combineReducers({
  nav: navReducer,
});

export default uiReducers;
