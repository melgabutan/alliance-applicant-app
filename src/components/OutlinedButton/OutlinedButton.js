import "./OutlinedButton.css";

const OutlinedButton = (props) => {
  function handleClick() {
    window.location.href = props.href;
  }
  return (
    <button
      style={{ height: props.height, width: props.width }}
      className="outlined-button"
      onClick={handleClick}
    >
      Learn More
    </button>
  );
};

export default OutlinedButton;
