import TeamCard from "../TeamCard/TeamCard";
import "./JoinTeamContent.css";

// TODO: Make Design Responsive
const JoinTeamContent = () => {
  return (
    <div className="join-team-content">
      <h2>Join the team that excites you most!</h2>
      <div className="row-container teams-container">
        <TeamCard
          href="/available-jobs"
          firstDescription="Attracts the best talents"
          secondDescription="Ensures employee satisfaction"
          thirdDescription="Enforces company policies"
          imagePath="./assets/images/join-team/hr-team.png"
          icon="./assets/images/join-team/check-icon.png"
          teamName="HR Team"
        />
        <TeamCard
          href="/available-jobs"
          firstDescription="Protects IT assets"
          secondDescription="Optimizes computer systems"
          thirdDescription="Develop software solutions"
          imagePath="./assets/images/join-team/it-team.png"
          icon="./assets/images/join-team/check-icon.png"
          teamName="IT Team"
        />
        <TeamCard
          href="/available-jobs"
          firstDescription="Analyzes financial data"
          secondDescription="Keeps financial records accurate"
          thirdDescription="Manages the company's budget"
          imagePath="./assets/images/join-team/finance-team.png"
          icon="./assets/images/join-team/check-icon.png"
          teamName="Finance Team"
        />
      </div>
    </div>
  );
};

export default JoinTeamContent;
