import './ImageButton.scss';
import {
  useParams
} from "react-router-dom";

function ImageButton({ name, ...props }) {

  const { id } = useParams();
  console.log('imgBtn', id)

  return (
    <button {...props} className="btn">
      {name} {id}
    </button>
  );
}

export default ImageButton;
