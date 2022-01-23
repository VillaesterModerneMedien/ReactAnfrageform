import SVG from "react-inlinesvg";

import "./ImageButton.scss";

function ImageButton({ image, stepToGo, value, name, label, onClick }) {
  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(name, { name, label, value }, stepToGo);
    }
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
