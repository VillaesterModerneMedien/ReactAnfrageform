import './ImageButton.scss';
import {
  useParams
} from "react-router-dom";
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { useContext, useState, useEffect } from "react";
import {AppContext, SET_STEP_DATA} from '../../components/AppContext'

function ImageButton({ image, value, name, onClick, ...props }) {
  const { state, dispatch } = useContext(AppContext);
  const [stepData, setStepData] = useState(state?.data || {});

  // Step ID aus der URL....
  const { id } = useParams();

  console.log(stepData);

  const handleClick = (e) => {
    let data = [stepData]
    data.push({[name]: e.currentTarget.value})

    setStepData(data)

    dispatch({
      type: SET_STEP_DATA,
      data: {
          stepData
      },
    });
  };

  /*
  EIGENTLICH SOLL stepData so aussehen:

  {'wert1': 'aussen','wert2':'innen',........}

  das sollen die Werte meines Forms werden, die ich am Ende aller Steps übergeben will...
  es wird also mehrere Steps geben und stepData soll in jedem Step bisschen mehr befüllt werden



   */

  return (
    <button
        className="imageButton"
        onClick={handleClick}
        value={value}
        id={name}
    >
      <SVG src={image} width={50} height="auto" title={name} />
    </button>
  );
}

export default ImageButton;
