import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div>Hello { this.props.name }, welcome.</div>
      <button onClick={ () => this.props.changePage('draw') }>Click here to get draw page</button>
      <button onClick={ () => this.props.closePage('draw') }>Click here to close draw page</button>
    </div>

  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
  closePage: PropTypes.func.isRequired
}

export default HelloMessage;