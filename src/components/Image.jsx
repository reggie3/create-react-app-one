import React from "react";

const Image = (props) => {
  return <img className="cat-picture" src={props.source} alt={props.alt}></img>;
};

export default Image;
