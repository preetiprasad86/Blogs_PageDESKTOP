import React from "react";
import Frame1587 from "../Frame1587";
import "./Frame1598.css";

function Frame1598(props) {
  const { blogThumbnail, address, text72, text73, className, frame1587Props } = props;

  return (
    <div className={`frame-1598 ${className || ""}`}>
      <div className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}></div>
      <div className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text valign-text-middle overpass-bold-shark-24px">{text72}</div>
      <p className="text-3 overpass-semi-bold-scarpa-flow-16px">{text73}</p>
      <Frame1587 text74={frame1587Props.text74} />
    </div>
  );
}

export default Frame1598;
