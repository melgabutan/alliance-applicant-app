import "./InputTile.css";

const InputTile = (props) => {
  return (
    <div className="input-tile">
      <p>First Name</p>
      <input type="text" placeholder="John" />
    </div>
  );
};

export default InputTile;
