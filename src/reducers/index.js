import { combineReducers } from 'redux';
import uiReducers from 'Ducks/ui/index';

const reducers = combineReducers({
  ui: uiReducers,
});

export default reducers;
