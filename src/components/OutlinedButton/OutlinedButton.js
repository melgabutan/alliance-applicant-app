import "./OutlinedButton.css";

const OutlinedButton = (props) => {
  return (
    <a href={props.href}>
      <div
        style={{ height: props.height, width: props.width }}
        className="outlined-button"
      >
        <p>Learn More</p>
      </div>
    </a>
  );
};

export default OutlinedButton;
