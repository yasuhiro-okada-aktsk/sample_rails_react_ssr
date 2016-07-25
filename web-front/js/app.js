import React from 'react';
import ReactDOM, {render} from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

class RailsComponent extends React.Component {
  static propTypes = {};

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Root store={store}/>
    );
  }
}

//window.React = React;
//window.ReactDOM = ReactDOM;
window.RailsComponent = RailsComponent;
