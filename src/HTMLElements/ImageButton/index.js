import './ImageButton.scss';
import {
  useParams
} from "react-router-dom";
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { useContext, useState, useEffect } from "react";
import {AppContext, SET_STEP_DATA} from '../../components/AppContext'




function ImageButton({ image, value, name, onClick, ...props }) {
  const { state, dispatch } = useContext(AppContext);
  //const [firstName, setFirstName] = useState(state?.data?.firstName);
  const [stepData, setStepData] = useState(state?.data || {});

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
