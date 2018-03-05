import React, { Component, Fragment } from 'react';

import Climb from '../../components/Climb/Climb';


class ClimbBuilder extends Component {
  render () {
    return (
      <Fragment>
        <Climb />
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default ClimbBuilder;