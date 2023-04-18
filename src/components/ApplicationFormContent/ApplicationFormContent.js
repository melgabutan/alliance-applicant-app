import "./ApplicationFormContent.css";
import InputTile from "../InputTile/InputTile";

const ApplicationFormContent = (props) => {
  return (
    <div className="application-form-content">
      <img src="./assets/images/application-form/illustration.png" />
      <div className="application-form-txt">
        <h2>You're almost there!</h2>
        <p id="application-form-prompt">
          We’re excited to have you onboard, but before we do that, let’s get to
          know you a little more first.
        </p>
        <div className="application-form">
          <form action="">
            <InputTile />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormContent;
