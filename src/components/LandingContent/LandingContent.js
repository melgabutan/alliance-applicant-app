import "./LandingContent.css";
// TODO: Make Design Responsive

const LandingContent = () => {
  return (
    <div className="landing-content">
      <div className="landing-greeting">
        <img src="./assets/images/landing-content/zigzag-lines.png" />
        <h1>Launch your career with Alliance</h1>
        <p>
          Join our dynamic team and discover how we can help you achieve your
          professional goals.
        </p>
        <div className="start-container">
          <a id="play-link" href="/company-profile">
            <img
              id="play-button"
              src="./assets/images/landing-content/play-button.png"
              alt="play-button"
            />
          </a>
          <a href="/company-profile">Start Your Journey</a>
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
