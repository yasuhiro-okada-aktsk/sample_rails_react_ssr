import {routeReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import * as UserReducers from './user';

const rootReducer = combineReducers({
  routing: routeReducer,
  ...UserReducers,
});

export default rootReducer;
