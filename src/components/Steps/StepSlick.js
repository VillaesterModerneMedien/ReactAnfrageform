import React, { useContext } from "react";
import "./StepSlick.scss";
import Components from "../components";
import { AppContext, SET_STEP, UPDATE_DATA } from "../AppContext";

function StepSlick({ index, title, fields, containerClass }) {
  const { dispatch } = useContext(AppContext);

  const handleClick = (name, value, stepToGo) => {
    dispatch({
      type: SET_STEP,
      step: stepToGo,
    });
    dispatch({
      type: UPDATE_DATA,
      data: {
        [name]: value,
      },
    });
  };

  return (
    <div className="slickItemContainer">
      {title && (
        <h1 className="mainTitle uk-heading uk-heading-primary">{title}</h1>
      )}
      <div className={`formElementsContainer ${containerClass}`}>
        {fields.map(({ component, ...blockProps }, i) => {
          const Component = Components[component];
          if (!Component) {
            return (
              <div>The component {component} has not been created yet.</div>
            );
          }
          return (
            <Component
              key={`${index}-${blockProps.name}-${i}`}
              {...blockProps}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
export default StepSlick;
