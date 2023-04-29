import "./FileTile.css";

const FileTile = (props) => {
  function fileContained() {
    return !(props.btnText === "Upload CV" || props.btnText === "Upload Photo");
  }
  return (
    <div className={`file-tile`}>
      <p>{props.field}</p>
      <input
        id={props.name + "Id"}
        name={props.name}
        onChange={props.onChange}
        accept={props.accept}
        value={props.value}
        style={{
          width: props.inputWidth,
        }}
        type="file"
        placeholder={props.placeholder}
      />
      <label htmlFor={props.name + "Id"}>
        <div
          className="row-container file-text"
          style={{
            borderRadius: "5px",
            backgroundColor: fileContained() ? "#4E9E32" : "#065FD4",
          }}
        >
          <img
            src={
              fileContained()
                ? "../../assets/images/application-form/success-icon.png"
                : "../../assets/images/application-form/upload-icon.png"
            }
            alt="icon"
          />
          <p id="file-btn-text">{props.btnText}</p>
        </div>
      </label>
      <div className="row-container file-validator">
        <img
          alt="icon"
          className="file-validator-icon"
          src={
            props.errorMessage === "" || fileContained()
              ? "../../assets/images/application-form/info-icon.png"
              : "../../assets/images/application-form/error-icon.png"
          }
        />
        <p
          style={{
            color:
              props.errorMessage === "" || fileContained() ? "black" : "red",
          }}
        >
          {props.errorMessage === "" || fileContained()
            ? props.defaultMessage
            : props.errorMessage}
        </p>
      </div>
    </div>
  );
};

export default FileTile;
