import {combineReducers} from 'redux';

import * as CountReducers from './count';
import * as TreeReducers from './tree';

const rootReducer = combineReducers({
  ...CountReducers,
  ...TreeReducers,
});

export default rootReducer;
