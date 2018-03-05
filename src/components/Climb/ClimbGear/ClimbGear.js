import React from 'react';

import classes from './ClimbGear';

const climbGear = (props) => {
  let gear = null;

  switch (props.type) {
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
    case ('rappel-device'):
      gear = <div className={classes.RappelDevice}></div>;
      break;
    case ('chalk-bag'):
      gear = <div className={classes.ChalkBag}></div>;
      break;
    default:
      gear = null;
  }

  return gear;
};

export default climbGear;