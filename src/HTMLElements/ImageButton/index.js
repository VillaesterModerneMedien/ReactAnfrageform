import './ImageButton.scss';
import SVG, { Props as SVGProps } from 'react-inlinesvg';


function ImageButton({ image, stepToGo, value, name, label, sliderData, onClick, onChange, ...props }) {

  const handleClick = (e) => {
        onClick(e, stepToGo)
        //console.log('Click direkt auf Btn', stepToGo)
  };

  return (
    <div className="imageButtonContainer">
        <button
          className="imageButton"
          onClick={handleClick}
          value={value}
          id={name}
      >
        <SVG src={image} width={50} height="auto" title={name} />
      </button>
      <label>{label}</label>
    </div>

  );
}

export default ImageButton;
