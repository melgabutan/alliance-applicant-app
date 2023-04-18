import "./TeamCard.css";
import FilledButton from "../FilledButton/FilledButton";
import ListItem from "../ListItem/ListItem";

// TODO: Make Design Responsive
const TeamCard = (props) => {
  return (
    <div className="team-card">
      <img id="team-img" src={props.imagePath} />
      <h3>{props.teamName}</h3>
      <ListItem
        height="1.0625rem"
        width="1.0625rem"
        imgPath={props.icon}
        text={props.firstDescription}
      />
      <ListItem
        height="1.0625rem"
        width="1.0625rem"
        imgPath={props.icon}
        text={props.secondDescription}
      />
      <ListItem
        height="1.0625rem"
        width="1.0625rem"
        imgPath={props.icon}
        text={props.thirdDescription}
      />
      <FilledButton
        href={props.href}
        textId="join-btn-text"
        className="join-team-btn"
        bottom="7%"
        position="absolute"
        text="Join"
        width="15rem"
      />
    </div>
  );
};

export default TeamCard;
