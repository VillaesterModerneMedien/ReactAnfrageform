import './ImageButton.scss';
import {
  useParams
} from "react-router-dom";
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { useContext, useState, useEffect } from "react";
import {AppContext, SET_STEP_DATA} from '../../components/AppContext'




function ImageButton({ image, value, name, onClick, ...props }) {
  const { state, dispatch } = useContext(AppContext);
  const [firstName, setFirstName] = useState(state?.data?.firstName)


  const [formState, setFormState] = useState();
  useEffect(() => {
    setFormState(state?.data || {});
  }, [state]);

  const { id } = useParams();
  console.log('imgBtn', id)

  const handleClick = (e) => {
    const data = {};
    data[name] = e.currentTarget.value
    console.log(e.currentTarget)
    dispatch({
      type: SET_STEP_DATA,
      data: data,
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
