import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {defaultMapDispatchToProps} from '../actions/index';

class CourseListPage extends React.Component {
  static propTypes = {};

  constructor(...args) {
    super(...args);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  render() {
    const {count} = this.props;

    return (
      <div style={{border: '1px solid #eee'}}>
        <h1>CourseListPage</h1>

        <button type="button" onClick={this._onClick.bind(this)}>add</button>

        <p>current value: {count}</p>
      </div>
    );
  }

  _onClick() {
    const {actions} = this.props;
    actions.countInc();
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(
  mapStateToProps,
  defaultMapDispatchToProps,
)(CourseListPage);
