import "./JobCard.css";
import ImageCard from "../ImageCard/ImageCard";
import FilledButton from "../FilledButton/FilledButton";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import Chip from "../Chip/Chip";

const JobCard = (props) => {
  return (
    <div className="job-card">
      <div className="main-details">
        <ImageCard imgPath={props.imgPath} />
        <div className="job-txt-details">
          <div className="row-container">
            <h3>{props.jobTitle}</h3>
            <Chip
              className="job-chip"
              text={props.firstChipText}
              color={props.firstChipColor}
            />
            <Chip
              className="job-chip"
              text={props.secondChipText}
              color={props.secondChipColor}
            />
          </div>
          <p id="job-description">{props.jobDescription}</p>
        </div>
      </div>
      <div className="sub-details">
        <div className="apply-btns">
          <FilledButton
            href={props.applyHref}
            text="Apply"
            height="1.5625rem"
            width="4.6875rem"
          />
          <OutlinedButton
            href={props.learnHref}
            height="1.6875rem"
            width="4.8125rem"
          />
        </div>
        <div className="salary-txt">
          <span className="salary">
            {`₱${props.firstSalaryRange}K - ${props.secondSalaryRange}K`}
          </span>
          <span className="month-txt">/month</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
