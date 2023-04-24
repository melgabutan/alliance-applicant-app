import "./FileTile.css";

const FileTile = (props) => {
  return (
    <div className={`file-tile`}>
      <p>{props.field}</p>
      <input
        id="fileBtn"
        style={{ width: props.inputWidth }}
        type="file"
        placeholder={props.placeholder}
      />
      <label htmlFor="fileBtn">
        <div className="row-container file-text">
          <img src="./assets/images/application-form/upload-icon.png" alt="" />
          <p id="file-btn-text">{props.btnText}</p>
        </div>
      </label>
      <div className="row-container file-validator">
        <img
          className="file-validator-icon"
          src="./assets/images/application-form/info-icon.png"
        />
        <p>{props.fileValidatorText}</p>
      </div>
    </div>
  );
};

export default FileTile;
