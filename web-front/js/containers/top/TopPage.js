import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {defaultMapDispatchToProps} from '../../actions/index';

class TopPage extends React.Component {
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
      <div>
        TopPage
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  defaultMapDispatchToProps,
)(TopPage);
