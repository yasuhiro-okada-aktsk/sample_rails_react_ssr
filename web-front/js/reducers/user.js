import {handleActions} from 'redux-actions';

export const users = handleActions({
  USERS_GET: (state, action) => (action.payload ? [...state, ...action.payload] : state),
}, []);
