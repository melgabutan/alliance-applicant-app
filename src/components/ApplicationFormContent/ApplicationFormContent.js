import "./ApplicationFormContent.css";
import InputTile from "../InputTile/InputTile";
import FileTile from "../FileTile/FileTile";
import { useState } from "react";
import axios from "axios";

const ApplicationFormContent = (props) => {

  const [firstname, setFN] = useState("")
  const [lastname, setLN] = useState("")
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState("")
  const [photo, setPhoto] = useState("") 

  const addApplicanta = async () => {
    let formField = new FormData()

    formField.append('firstname', firstname)
    formField.append('lastname', lastname)
    formField.append('email', email)
    //formField.append('resume', resume)
    //formField.append('photo', photo)
  
    await axios.post("http://localhost:55731/api/ApplicantAPI/add",formField)
    .then((response) => {
      if(response.data == '200'){
        console.log('Applicant Successfully Added')
      } else{
        console.log('Error Adding')
      }
    }).catch((error) => {
      console.log("Error:")
      console.log(error)
    })
  }

  const addApplicant = async () => {
    let formField = new FormData()

    formField.append('firstname', firstname)
    formField.append('lastname', lastname)
    formField.append('email', email)
    //formField.append('resume', resume)
    //formField.append('photo', photo)
    try {
      const response = await axios.post('http://localhost:55731/api/PersonalInformation/add', {
        headers: {
          'Content-Type': 'application/json-patch+json',
          "apl_id": 0,
          "apl_firstName": "Mel",
          "apl_lastName": "Gabutan",
          "apl_email": "test@email.com",
          "apl_documentCV": "resume.pdf",
          "apl_documentPhoto": "pic.jpg",
          "apl_position": 1,
          "apl_status": 1,
          "apl_statusNote": "string",
          "apl_createdDate": "2023-04-24T14:18:37.058Z",
          "apl_modifiedBy": "string",
          "apl_modifiedDate": "2023-04-24T14:18:37.058Z",
          "apl_isActive": true,
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
          <form action="" >
            <div className="row-container">
              <InputTile
                field="First Name"
                name='firstname'
                value = {firstname}
                onChange={(e) => setFN(e.target.value)}
                placeholder="John"
                inputType="text"
              />
              <InputTile field="Last Name" name='lastname' value = {lastname} onChange={(e) => setLN(e.target.value)} placeholder="Doe" inputType="text" />
            </div>
            <InputTile
              inputWidth="27.8125rem"
              field="Email Address"
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value = {email}
              placeholder="doe.john@alliance.ph"
              inputType="email"
            />
            <div className="row-container">
              <FileTile
                btnText="Upload CV"
                field="Curriculum Vitae (CV)"
                name='resume'
                value = {resume}
                onChange={(e) => setResume(e.target.value)}
                fileValidatorText="File Format: PDF"
              />
              <FileTile
                btnText="Upload Photo"
                field="Passport-sized Photo"
                name='photo'
                value = {photo}
                onChange={(e) => setPhoto(e.target.value)}
                fileValidatorText="File Format: JPEG & PNG"
              />
            </div>
            <button onClick={addApplicant}>Test Submit</button>
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
