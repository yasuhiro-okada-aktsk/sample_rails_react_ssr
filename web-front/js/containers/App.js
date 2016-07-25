import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {defaultMapDispatchToProps} from '../actions/index';

class App extends React.Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
  };

  constructor(...args) {
    super(...args);

    this._onScroll = this._onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll, false);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll, false);
  }

  render() {
    const {children} = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }

  _onScroll() {
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(
  mapStateToProps,
  defaultMapDispatchToProps,
)(App);
