import types from './types';

const {
  NAV_TOGGLE,
} = types;

const toggleNav = (payload) => ({
  type: NAV_TOGGLE,
  payload,
});

export default {
  toggleNav,
};
