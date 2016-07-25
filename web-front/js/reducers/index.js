import {combineReducers} from 'redux';

import * as CountReducers from './count';

const rootReducer = combineReducers({
  ...CountReducers,
});

export default rootReducer;
