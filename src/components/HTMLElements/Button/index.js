import "./Button.scss";

import SVG from "react-inlinesvg";
import { useContext, useState, useEffect } from "react";
import { AppContext, SET_STEP_DATA } from "../../AppContext";
import jsonData from "../../../data/steps.json";

function Button({ image, value, name, onClick, ...props }) {
  const { state, dispatch } = useContext(AppContext);
  const [stepData, setStepData] = useState({});

  const maxPages = jsonData.length;

  useEffect(() => {
    setStepData(state?.data || {});
  }, [state]);

  const handleClick = (e) => {
    const newData = { [name]: e.currentTarget.value };
    //const newData = {'wert1': 'kiki'}

    const mergedData = { ...stepData, ...newData };

    const nextID = parseInt(0) + 1;

    console.log("mergedData", mergedData);

    dispatch({
      type: SET_STEP_DATA,
      data: mergedData,
    });

    console.log("max", maxPages);
    console.log("next", nextID);
  };

  /*
  EIGENTLICH SOLL stepData so aussehen:

  {'wert1': 'aussen','wert2':'innen',........}

  das sollen die Werte meines Forms werden, die ich am Ende aller Steps übergeben will...
  es wird also mehrere Steps geben und stepData soll in jedem Step bisschen mehr befüllt werden



   */

  return (
    <button
      className="btn button"
      onClick={handleClick}
      value={value}
      id={name}
    >
      <SVG src={image} width={50} height="auto" title={name} />
    </button>
  );
}

export default Button;
