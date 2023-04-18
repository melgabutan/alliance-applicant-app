import "./Chip.css";

const Chip = (props) => {
  return (
    <div
      style={{ borderColor: props.color }}
      className={`chip-container ${props.className}`}
    >
      <p style={{ color: props.color }}>{props.text}</p>
    </div>
  );
};

export default Chip;
