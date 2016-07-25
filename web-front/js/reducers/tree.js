import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const node1 = handleActions({
  ACTION1: (state, action) => (state + 1),
}, []);

const node2 = handleActions({
  ACTION2: (state, action) => (state + 1),
}, "");


export const treeRoot = combineReducers({
  node1,
  node2,
});
