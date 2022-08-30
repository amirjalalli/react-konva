import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Transformer, Rectangle } from "react-konva";
import city from "./../image/city.jpg";
import Color from "./../component/Color/Color";
import Data from "./../Data";
import RectAngel from "../component/RectAngel/RectAngel";
import Picture from "./../component/Picture/Picture";

const Home = () => {
  const [showSquer, setShowSquer] = useState(false);
  const [rectangles, setRectangles] = useState(Data);
  const [changeColor, setChageColor] = useState("");
  const [selectedId, selectShape] = React.useState(null);

  const showSquerHandler = (e) => {
    setShowSquer(!showSquer);
    setChageColor(e.target.attributes[1].nodeValue.slice(18, 39));
  };
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <article className="HomeContent">
        <section className="pictureContent" style={{ overflow: "hidden" }}>
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            style={{
              backgroundImage: `url(${city})`,
              width: "inherit",

              height: "inherit",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Layer
              style={{
                border: "3px solid white",
              }}
            >
              {rectangles.map((rect, i) => {
                return (
                  <RectAngel
                    key={i}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => {
                      selectShape(rect.id);
                    }}
                    onChange={(newAttrs) => {
                      const rects = rectangles.slice();
                      rects[i] = newAttrs;
                      setRectangles(rects);
                    }}
                  ></RectAngel>
                );
              })}
            </Layer>
          </Stage>
        </section>
        <section className="footerContent">
          <div className="foooterTitle">
            <p>RDI</p>
            <div className="border"></div>
          </div>
          <div className="choseColor">
            <Color data={Data} toggleSquer={showSquerHandler} />
            <div className="btn">+</div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
