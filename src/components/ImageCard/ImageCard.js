import "./ImageCard.css";

const ImageCard = (props) => {
  return (
    <div className={`image-card ${props.className}`}>
      <img src={props.imgPath} />
    </div>
  );
};

export default ImageCard;
