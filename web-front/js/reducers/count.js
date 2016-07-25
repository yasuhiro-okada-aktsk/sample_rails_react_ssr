import {handleActions} from 'redux-actions';

export const count = handleActions({
  COUNT_INC: (state, action) => (state + 1),
}, 0);
