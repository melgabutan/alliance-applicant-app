import "./ApplicationFormContent.css";
import InputTile from "../InputTile/InputTile";
import FileTile from "../FileTile/FileTile";

const ApplicationFormContent = (props) => {
  return (
    <div className="application-form-content">
      <img
        id="application-illustration"
        src="./assets/images/application-form/illustration.png"
      />
      <div className="application-form-txt">
        <h2>You're almost there!</h2>
        <p id="application-form-prompt">
          We’re excited to have you onboard, but before we do that, let’s get to
          know you a little more first.
        </p>
        <div className="application-form">
          <form action="">
            <div className="row-container">
              <InputTile
                field="First Name"
                placeholder="John"
                inputType="text"
              />
              <InputTile field="Last Name" placeholder="Doe" inputType="text" />
            </div>
            <InputTile
              inputWidth="27.8125rem"
              field="Email Address"
              placeholder="doe.john@alliance.ph"
              inputType="email"
            />
            <div className="row-container">
              <FileTile
                btnText="Upload CV"
                field="Curriculum Vitae (CV)"
                fileValidatorText="File Format: PDF"
              />
              <FileTile
                btnText="Upload Photo"
                field="Passport-sized Photo"
                fileValidatorText="File Format: JPEG & PNG"
              />
            </div>
            <div className="row-container submit">
              <a id="play-link" href="/confirmation">
                <img
                  id="play-button"
                  src="./assets/images/landing-content/play-button.png"
                  alt="play-button"
                />
              </a>
              <a id="submit-application" href="/confirmation">
                Submit Application
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormContent;
