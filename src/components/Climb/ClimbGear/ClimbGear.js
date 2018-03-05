import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './ClimbGear.css';

class ClimbGear extends Component {
  render () {
    let gear = null;

      switch (this.props.type) {
        case ('shoes'):
          gear = <div className={classes.Shoes}></div>;
          break;
        case ('harness'):
          gear = (
            <div className={classes.Harness}>
              <div className={classes.HarnessColor1}></div>
              <div className={classes.HarnessColor2}></div>
            </div>
          );
          break;
        case ('quickdraws'):
          gear = <div className={classes.Quickdraws}></div>;
          break;
        case ('locker'):
          gear = <div className={classes.Locker}></div>;
          break;
        case ('rappeldevice'):
          gear = <div className={classes.RappelDevice}></div>;
          break;
        case ('chalkbag'):
          gear = <div className={classes.ChalkBag}></div>;
          break;
        default:
          gear = null;
      }

      return gear;

    }
}

ClimbGear.propTypes = {
  type: PropTypes.string.isRequired
};

export default ClimbGear;





