import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const createRoot = (Component) => {

  class RailsRoot extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Component {...this.props} {...this.state} />
        </Provider>
      );
    }
  }

  return RailsRoot;
};

export default createRoot;
