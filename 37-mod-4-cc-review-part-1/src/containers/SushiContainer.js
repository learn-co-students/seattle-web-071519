import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi
          .slice(props.sushiIndex, props.sushiIndex + 4)
          .map((sushi, idx) => (
            <Sushi sushi={sushi} key={idx} eatSushi={e => props.eatSushi(e)} />
          ))}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
