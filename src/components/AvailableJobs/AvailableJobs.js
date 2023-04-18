import "./AvailableJobs.css";
import ImageCard from "../ImageCard/ImageCard";
import JobCard from "../JobCard/JobCard";

// TODO: Make Design Responsive
const AvailableJobs = () => {
  return (
    <div className="available-jobs">
      <h2>Wohoo! Splendid choice! 🎉</h2>
      <p id="available-jobs-subtitle">
        Below, you will find our current list of available jobs in the IT team.
        We can’t wait to see what you bring to the team!
      </p>
      <div className="job-cards">
        <JobCard
          learnHref="/job-information"
          firstChipText="Full-time"
          firstChipColor="#4E9E32"
          secondChipText="Remote"
          secondChipColor="#FF0000"
          firstSalaryRange="20"
          secondSalaryRange="40"
          jobTitle="Software Developer"
          jobDescription="Implements technical work, including software coding, design, testing, and documentation."
          imgPath="./assets/images/common/software-developer.png"
        />
        <JobCard
          firstChipText="Full-time"
          firstChipColor="#4E9E32"
          secondChipText="On-site"
          secondChipColor="#F5C84C"
          firstSalaryRange="70"
          secondSalaryRange="80"
          jobTitle="QA Engineer"
          jobDescription="Creates and maintains quality standards by conducting tests and evaluations."
          imgPath="./assets/images/common/qa-engineer.png"
        />
        <JobCard
          firstChipText="Part-time"
          firstChipColor="#5290DB"
          secondChipText="Remote"
          secondChipColor="#FF0000"
          firstSalaryRange="30"
          secondSalaryRange="40"
          jobTitle="Systems Analyst"
          jobDescription="Analyzes and designs computer systems. Moreover, ensures that the needs of the clients are met."
          imgPath="./assets/images/common/systems-analyst.png"
        />
      </div>
    </div>
  );
};

export default AvailableJobs;
