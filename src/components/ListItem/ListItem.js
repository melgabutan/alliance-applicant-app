import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list-item">
      <img
        style={{
          width: props.width,
          height: props.height,
        }}
        src={props.imgPath}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem;
