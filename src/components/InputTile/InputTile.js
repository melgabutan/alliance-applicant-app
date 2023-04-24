import "./InputTile.css";

const InputTile = (props) => {
  return (
    <div className={`input-tile ${props.className}`}>
      <p>{props.field}</p>
      <input
        style={{ width: props.inputWidth }}
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputTile;
