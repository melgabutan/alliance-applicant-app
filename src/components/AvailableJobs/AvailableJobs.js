import "./AvailableJobs.css";
import JobCard from "../JobCard/JobCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// TODO: Make Design Responsive
const AvailableJobs = (props) => {
  const imageUrls = [
    "../assets/images/common/software-developer.png",
    "../assets/images/common/qa-engineer.png",
    "../assets/images/common/hr-recruitment-staff.png",
    "../assets/images/common/account-executive.png",
    "../assets/images/common/hr-recruitment-specialist.png",
    "../assets/images/common/senior-accountant.png",
  ];

  const teamNames = ["IT Team", "HR Team", "Finance Team"];
  let params = useParams();
  let deptid = params.deptid;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `http://localhost:55731/api/PositionAPI/list?PosDepartment=${deptid}&PageSize=5`
        )
        .then((response) => {
          setInfo(response.data);
          console.log(response.data);
          console.log(info);
        })
        .catch(function (error) {});
    };
    fetchData();
  }, []);
  console.log(deptid);
  return (
    <div className="available-jobs">
      <h2>Wohoo! Splendid choice! 🎉</h2>
      <p id="available-jobs-subtitle">
        Below, you will find our current list of available jobs in the{" "}
        {teamNames[deptid - 1]}. We can’t wait to see what you bring to the
        team!
      </p>
      <div className="job-cards">
        {info?.data?.map((infor) => (
          //<li style={{listStyle:'none'}}> ⭐️{infor.name} </li>
          <JobCard
            learnHref={`/job-information/${infor.id}`}
            firstChipText="Full-time"
            firstChipColor="#4E9E32"
            secondChipText="On-site"
            secondChipColor="#F5C84C"
            firstSalaryRange={infor.minSalary}
            secondSalaryRange={infor.maxSalary}
            jobTitle={infor.name}
            applyHref={`/application-form/${infor.name}/${infor.id}`}
            jobDescription={
              <li style={{ listStyle: "none" }}> {infor.description} </li>
            }
            imgPath={imageUrls[infor.id - 1]}
          />
        ))}

        {/*<JobCard
          learnHref="/job-information"
          firstChipText="Full-time"
          firstChipColor="#4E9E32"
          secondChipText="Remote"
          secondChipColor="#FF0000"
          firstSalaryRange="20"
          secondSalaryRange="40"
          jobTitle="Software Developer"
          jobDescription="Implements technical work, including software coding, design, testing, and documentation."
          
        />
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
      */}
      </div>
    </div>
  );
};

export default AvailableJobs;
