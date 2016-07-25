import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const createRoot = (Component) => {

  class RailsRoot extends React.Component {
    render() {
      const store = configureStore(this.props);

      return (
        <Provider store={store}>
          <Component {...this.props} {...this.state} />
        </Provider>
      );
    }
  }

  console.log(RailsRoot)

  return RailsRoot;
};

export default createRoot;
