import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const switchColorIndex = () =>
    colorIndex !== 0 ? setColorIndex(colorIndex - 1) : setColorIndex(2);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={colorIndex === 0 ? "circle red" : "circle black"}></div>
        <div
          className={colorIndex === 1 ? "circle yellow" : "circle black"}
        ></div>
        <div
          className={colorIndex === 2 ? "circle green" : "circle black"}
        ></div>
      </div>
      <button className="next-state-button" onClick={switchColorIndex}>
        Next State
      </button>
    </div>
  );
};
