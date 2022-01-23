import "./Input.scss";

function Input({ type, label, name, ...props }) {
  return (
    <div className="formControl inputContainer">
      {label && <label>{label}</label>}
      <input type="text" />
    </div>
  );
}

export default Input;
