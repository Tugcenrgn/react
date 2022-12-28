import React from "react";
import PictureTake from "./PictureTake";

function BackGround({ background }) {
  return (
    <div className="background">
      <div className="overlay"></div>
      <PictureTake situation={background} />
    </div>
  );
}

export default BackGround;
