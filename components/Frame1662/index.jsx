import React from "react";
import Frame1640 from "../Frame1640";
import Button22 from "../Button22";
import HeaderWithBackground22 from "../HeaderWithBackground22";
import Footer32 from "../Footer32";
import "./Frame1662.css";

function Frame1662(props) {
  const {
    title,
    overlapGroup2,
    text1,
    address,
    text2,
    text30,
    line4,
    line5,
    line6,
    line7,
    line8,
    frame1640Props,
    frame16402Props,
    frame16403Props,
    button22Props,
    headerWithBackground22Props,
    footer32Props,
  } = props;

  return (
    <div className="frame-1662">
      <div className="overlap-group">
        <div className="frame-1576">
          <div className="overlap-group1">
            <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{title}</h1>
            <div className="group-182">
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="rectangle-81"></div>
                <div className="text-1 valign-text-middle overpass-bold-white-40px">{text1}</div>
                <div className="address valign-text-middle typographybody16-regular">{address}</div>
                <p className="text-2 overpass-semi-bold-white-16px-22">{text2}</p>
              </div>
            </div>
            <div className="group-129">
              <div className="overlap-group3">
                <div className="ellipse-101"></div>
              </div>
              <div className="ellipse-100"></div>
              <div className="ellipse-10"></div>
              <div className="ellipse-10"></div>
              <div className="ellipse-10"></div>
            </div>
            <div className="frame-1568">
              <Frame1640
                frame1598Props={frame1640Props.frame1598Props}
                frame15982Props={frame1640Props.frame15982Props}
                frame15983Props={frame1640Props.frame15983Props}
              />
              <Frame1640
                className={frame16402Props.className}
                frame1598Props={frame16402Props.frame1598Props}
                frame15982Props={frame16402Props.frame15982Props}
                frame15983Props={frame16402Props.frame15983Props}
              />
              <Frame1640
                className={frame16403Props.className}
                frame1598Props={frame16403Props.frame1598Props}
                frame15982Props={frame16403Props.frame15982Props}
                frame15983Props={frame16403Props.frame15983Props}
              />
              <Button22>{button22Props.children}</Button22>
            </div>
            <p className="text-30 typographybody16-regular">{text30}</p>
            <div className="group-89">
              <img className="line-4" src={line4} />
              <img className="line" src={line5} />
              <div className="biarrow-right-short">
                <img
                  className="vector"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-183@2x.svg"
                />
              </div>
              <img className="line-6" src={line6} />
              <img className="line" src={line7} />
              <img className="line-8" src={line8} />
            </div>
          </div>
        </div>
        <HeaderWithBackground22 {...headerWithBackground22Props} />
      </div>
      <Footer32 {...footer32Props} />
    </div>
  );
}

export default Frame1662;
