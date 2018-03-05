import React, { Component, Fragment } from 'react';

import Climb from '../../components/Climb/Climb';


class ClimbBuilder extends Component {
  state = {
    gears: {
      rappeldevice: 1,
      quickdraws: 2,
      chalkbag: 2,
      locker: 1
    }
  }

  render () {
    return (
      <Fragment>
        <Climb gears={this.state.gears} />
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default ClimbBuilder;