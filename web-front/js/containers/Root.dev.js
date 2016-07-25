import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';

import DevTools from './DevTools';
import Routes from './routes';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Routes />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
