import React, { useEffect, useRef, useContext, useMemo } from "react";
import Slider from "react-slick";
import StepSlick from "./StepSlick";
import "./StepSlick.scss";

import jsonData from "../../data/steps.json";
import { AppContext, REMOVE_STEP } from "../AppContext";

const SLICK_SETTINGS = {
  infinite: false,
  slidesToShow: 1,
  autoplay: false,
  dots: true,
  arrows: false,
  id: "formular-slick",
  speed: 500,
};

function Slick() {
  const sliderRef = useRef();
  const {
    state: { data, currentStep, stepsIncluded },
    dispatch,
  } = useContext(AppContext);

  const sliderData = useMemo(() => {
    return jsonData.filter(({ id }) => stepsIncluded.includes(id));
  }, [stepsIncluded]);

  useEffect(() => {
    sliderRef.current.slickNext();
  }, [currentStep, stepsIncluded]);

  const handleGoBack = () => {
    sliderRef.current.slickPrev();
    setTimeout(() => {
      dispatch({
        type: REMOVE_STEP,
        step: currentStep,
        dataToRemove: jsonData
          .find(({ id }) => id === stepsIncluded[stepsIncluded.length - 2])
          .fields.map((field) => field.name),
      });
    }, SLICK_SETTINGS.speed);
  };

  console.log(data);
  return (
    <div className="formOuterContainer">
      {stepsIncluded.length > 1 && (
        <button onClick={handleGoBack}>zurück</button>
      )}
      <Slider {...SLICK_SETTINGS} id="formulator" ref={sliderRef}>
        {sliderData.map(function (slideData, index) {
          return (
            <StepSlick
              key={slideData.id}
              title={slideData.question}
              index={index}
              id={index}
              fields={slideData.fields}
              containerClass={slideData.containerClass}
            />
          );
        })}
      </Slider>
    </div>
  );
}
export default Slick;
