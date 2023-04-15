import "./LandingContent.css";

const LandingContent = () => {
  return (
    <div className="landing-content">
      <div className="landing-greeting">
        <h1>Launch your career with Alliance</h1>
        <p>
          Join our dynamic team and discover how we can help you achieve your
          professional goals.
        </p>
        <div className="start-container">
          {/* TODO: Add Button Event */}
          <img
            id="play-button"
            src="./assets/images/landing-content/play-button.png"
            alt="play-button"
          />
          <a href="">Start Your Journey</a>
        </div>
      </div>
      <img
        id="landing-illustration"
        src="./assets/images/landing-content/landing-illustration.png"
        alt="illustration"
      />
    </div>
  );
};

export default LandingContent;
