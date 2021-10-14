import './Input.scss';
import {
  useParams
} from "react-router-dom";
import SVG, { Props as SVGProps } from 'react-inlinesvg';


function Input({ type, label, name, ...props }) {

  const { id } = useParams();
  console.log('imgBtn', id)

  return (
      <div className="formControl inputContainer">
        {(label) && (
            <label>{label}</label>
        )}
        <input type="text" />
      </div>
  );
}

export default Input;
