import "./InputTile.css";

const InputTile = (props) => {
  return (
    <div name={props.name} className={`input-tile ${props.className}`}>
      <p>{props.field}</p>
      <input
        className={props.className}
        style={{
          width: props.inputWidth,
          borderColor: props.borderColor,
        }}
        type={props.inputType}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
      />
      <div
        style={{ visibility: props.errorVisibility }}
        className="row-container"
      >
        <img
          src="../../assets/images/application-form/error-icon.png"
          alt="error-icon"
        />
        <span>{props.errorMessage}</span>
      </div>
    </div>
  );
};

export default InputTile;
