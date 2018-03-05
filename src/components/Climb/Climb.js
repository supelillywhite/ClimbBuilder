import React from 'react';

import classes from './Climb.css';
import ClimbGear from './ClimbGear/ClimbGear';

const climb = (props) => {
  const transformedGears = Object.keys( props.gears )
    .map(gKey => {
      return [...Array(props.gears[gKey])].map((_, i) => {
        return <ClimbGear key={gKey + i} type={gKey} />;
      });
    });
  return (
    <div className={classes.Climb}>
      <ClimbGear type="harness" />
      {transformedGears}
      <ClimbGear type="shoes" />
    </div>
  );
};

export default climb;