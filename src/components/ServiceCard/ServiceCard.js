import "./ServiceCard.css";
import Chip from "../Chip/Chip";

// TODO: Make Design Responsive
const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <img id="service-img" src={props.imagePath} />
      <h3>{props.serviceName}</h3>
      <p>{props.description}</p>
      <div className="row-container learn-more-container">
        <a id="learn-service" href={props.href}>
          <img
            id="next-button"
            src="./assets/images/service-content/next-button.png"
            alt="next-button"
          />
        </a>
        <a href={props.href}>
          <p id="learn-more-text">Learn More</p>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
