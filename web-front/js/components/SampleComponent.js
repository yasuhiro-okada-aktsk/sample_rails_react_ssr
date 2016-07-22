import React, {PropTypes} from 'react';

class SampleComponent extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

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
    const {message} = this.props;
    
    return (
      <div>
        <h1>React SampleComponent!</h1>
        {message}
      </div>
    );
  }
}

window.SampleComponent = SampleComponent;