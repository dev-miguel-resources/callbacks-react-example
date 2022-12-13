import React from "react";

const Car = (props) => {
  
  const onClick = () => {
    props.onCarClick(2);
  };

  // return <p onClick={() => props.onCarClick(2)}>I am the {"<Car />"}</p>;
  return <p onClick={onClick()}>I am the {"<Car />"}</p>;
};

export default Car;
