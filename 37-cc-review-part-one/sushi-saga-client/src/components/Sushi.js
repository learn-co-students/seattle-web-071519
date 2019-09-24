import React, { Fragment } from "react";

const Sushi = props => {
  let { name, img_url, price, isEaten, id } = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={e => props.eatSushi(e)}>
        {isEaten ? null : <img src={img_url} width="100%" id={id} />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
