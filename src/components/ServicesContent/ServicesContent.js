import "./ServicesContent.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import FilledButton from "../FilledButton/FilledButton";

// TODO: Make Design Responsive
const ServicesContent = () => {
  return (
    <div className="services-content">
      <h2>Discover our top products & services!</h2>
      <div className="services-container">
        <ServiceCard
          href="https://www.alliance.com.ph/it-services.html"
          imagePath="./assets/images/service-content/it-services.png"
          serviceName="IT Services"
          description="Alliance provides high quality software development services at reasonable costs through our on-shore Bridge Engineering service and proven off-shore Development processes."
        />
        <ServiceCard
          href="https://asi-ees.com/solutions.html"
          imagePath="./assets/images/service-content/business-solutions.png"
          serviceName="Business Solutions"
          description="Alliance provides business solutions under Alliance EDGE Business Solutions. It is a full business automation suite that gives businesses accurate and real-time data for efficient, maximized, and profit-driven decision-making."
        />
      </div>
      <div className="join-now">
        <FilledButton
          href="/join-team"
          text="Join Now!"
          height="2.8125rem"
          width="18.75rem"
        />
      </div>
    </div>
  );
};

export default ServicesContent;
