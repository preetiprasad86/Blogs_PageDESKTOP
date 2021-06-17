import React from "react";
import Frame1598 from "../Frame1598";
import "./Frame1640.css";

function Frame1640(props) {
  const { className, frame1598Props, frame15982Props, frame15983Props } = props;

  return (
    <div className={`frame-1640 ${className || ""}`}>
      <Frame1598
        blogThumbnail={frame1598Props.blogThumbnail}
        address={frame1598Props.address}
        text72={frame1598Props.text72}
        text73={frame1598Props.text73}
        className={frame1598Props.className}
        frame1587Props={frame1598Props.frame1587Props}
      />
      <Frame1598
        blogThumbnail={frame15982Props.blogThumbnail}
        address={frame15982Props.address}
        text72={frame15982Props.text72}
        text73={frame15982Props.text73}
        className={frame15982Props.className}
        frame1587Props={frame15982Props.frame1587Props}
      />
      <Frame1598
        blogThumbnail={frame15983Props.blogThumbnail}
        address={frame15983Props.address}
        text72={frame15983Props.text72}
        text73={frame15983Props.text73}
        className={frame15983Props.className}
        frame1587Props={frame15983Props.frame1587Props}
      />
    </div>
  );
}

export default Frame1640;
