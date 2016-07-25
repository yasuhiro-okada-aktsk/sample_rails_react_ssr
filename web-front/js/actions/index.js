import {bindActionCreators} from 'redux';
import {push, goBack} from 'react-router-redux';

//import * as Actions from './actions';

export const defaultMapDispatchToProps = (dispatch) => {
  return {
    actions: {
      //...bindActionCreators(Actions, dispatch),
      ...bindActionCreators({push, goBack}, dispatch),
    },
  };
};
