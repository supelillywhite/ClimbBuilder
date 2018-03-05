import React from 'react';

import classes from './Climb.css';
import ClimbGear from './ClimbGear/ClimbGear';

const climb = (props) => {
  return (
    <div className={classes.Climb}>
      <ClimbGear type="harness" />
      <ClimbGear type="quickdraws" />
      <ClimbGear type="chalk-bag" />
      <ClimbGear type="shoes" />
    </div>
  );
};

export default climb;