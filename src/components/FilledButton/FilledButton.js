import "./FilledButton.css";

const FilledButton = (props) => {
  return (
    <a href={props.href}>
      <div
        className={`filled-button ${props.className}`}
        style={{
          bottom: props.bottom,
          position: props.position,
          width: props.width,
          height: props.height,
          backgroundColor: props.color,
        }}
      >
        <p id={props.textId} className="filled-btn-txt">
          {props.text}
        </p>
      </div>
    </a>
  );
};

export default FilledButton;
