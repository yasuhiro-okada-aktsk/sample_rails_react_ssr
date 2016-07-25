import {bindActionCreators} from 'redux';

import * as Actions from './actions';

export const defaultMapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(Actions, dispatch),
    },
  };
};
