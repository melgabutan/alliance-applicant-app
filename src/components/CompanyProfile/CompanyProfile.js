import "./CompanyProfile.css";
import Chip from "../Chip/Chip.js";
import OutlinedButton from "../OutlinedButton/OutlinedButton.js";
import FilledButton from "../FilledButton/FilledButton.js";
// TODO: Make Design Responsive
const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <img
        id="company-profile-illustration"
        src="./assets/images/company-profile/illustration.png"
        alt="illustration"
      />
      <div className="company-profile-text">
        <h2 class="profile-heading">Get acquainted with Alliance</h2>
        <p id="company-bio">
          Alliance Software, Inc. is a global <span>IT services</span> and
          <span> solutions company</span>.
        </p>
        <div className="row-container">
          <Chip text="23 Years" color="red" />
          <Chip text="ISO 9001 Certified" color="#4E9E32" />
          <Chip text="350 Employees" color="#065FD4" />
        </div>
        <p id="branches-label">Branches</p>
        <img
          className="chip-image"
          src="./assets/images/company-profile/cebu-chip.png"
          alt="cebu-chip"
        />
        <img
          className="chip-image"
          src="./assets/images/company-profile/manila-chip.png"
          alt="manila-chip"
        />
        <img
          className="chip-image"
          src="./assets/images/company-profile/tokyo-chip.png"
          alt="tokyo-chip"
        />
        <div className="row-container">
          <OutlinedButton href="https://www.alliance.com.ph/" />
          <FilledButton text="Next" href="/services" />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
