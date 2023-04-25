import "./JobInformation.css";
import ImageCard from "../ImageCard/ImageCard";
import Chip from "../Chip/Chip";
import ListItem from "../ListItem/ListItem";
import FilledButton from "../FilledButton/FilledButton";
import {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// TODO: Make Design Responsive
const JobInformation = (props) => {

  let params = useParams();
  let jobid = params.jobid;

  console.log(jobid);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:55731/api/PositionAPI/getPosition?id=${jobid}`)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="job-information">
      <div className="job-info">
        <ImageCard imgPath="./assets/images/common/software-developer.png" />
        <div className="job-info-content">
          <div className="job-info-header">
            <h2>{data.pos_name}</h2>
            <Chip className="job-info-chip" text="Full-time" color="#4E9E32" />
            <Chip className="job-info-chip" text="Remote" color="#FF0000" />
          </div>
          <div className="job-salary-txt">
            <span className="job-salary">{`Salary: ₱20K - 40K`}</span>
            <span className="job-month-txt">/month</span>
          </div>
          <FilledButton text="Apply" href="application-form" />
        </div>
      </div>
      <h3>Job Qualifications</h3>
      <div className="job-descriptions">
        <p>
        {
          data?.pos_reqs?.map((infor) => (
            <li style={{listStyle:'none'}}> ⭐️{infor} </li> 
          )
        )
        }
        </p>
        {/* <p>
          ⭐️ Bachelor’s Degree of Computer Science / Information Technology
          (IT) or equivalent
        </p>
        <p>⭐️ Good scholastic record</p>
        <p>
          ⭐️ Can perform tasks needed for the project and willing to go
          overtime when necessary
        </p>
        <p>⭐️ Proficient in oral and written English communication skill</p>
        <p>⭐️ Strong knowledge and application with software programming</p> */}
      </div>
      <h3>Job Responsibilities</h3>
      <div className="job-descriptions">
      <p>
        {
          data?.pos_res?.map((infor) => (
            <li style={{listStyle:'none'}}> 🔨{infor} </li> 
          )
        )
        }
        </p>
        {/* <p>
          🔨 Implement technical work as specified by project proponent and / or
          assigned by Senior Technical Specialist / Supervisor
        </p>
        <p>
          🔨 Performance of technical works in the areas of software coding
          using the assigned programming language design, unit/product testing
          and documentation.
        </p>
        <p>🔨 Execution of technical task assigned by the Project Leader.</p> */}
      </div>
    </div>
  );
};

export default JobInformation;
