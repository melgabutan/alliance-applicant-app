import "./ApplicationFormContent.css";
import InputTile from "../InputTile/InputTile";
import FileTile from "../FileTile/FileTile";
import Loading from "../Loading/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApplicationFormContent = (props) => {
  let params = useParams();
  let jobid = params.jobid;
  const { hideOtherComponents, unhideOtherComponents } = props;
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      curriculumVitae: "",
      applicantPhoto: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Oops! You missed this one."),
      lastName: Yup.string().required("Oops! You missed this one."),
      emailAddress: Yup.string()
        .email("Invalid email address format.")
        .required("Oops! You missed this one."),
      curriculumVitae: Yup.mixed().required("Oops! You missed this one"),
      applicantPhoto: Yup.mixed().required("Oops! You missed this one."),
    }),

    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      const formDataPDF = new FormData();

      try {
        formData.append("file", formik.values.applicantPhoto);
        formDataPDF.append("file", formik.values.curriculumVitae);
        formDataPDF.append("upload_preset", "alliance");
        formData.append("upload_preset", "alliance");

        setUploading(true);
        hideOtherComponents();

        const resPDF = await axios.post(
          "https://api.cloudinary.com/v1_1/dmlkt1car/upload",
          formDataPDF
        );
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dmlkt1car/image/upload",
          formData
        );

        const applicantData = {};
        const postRequest = await axios
          .post("http://localhost:55731/api/ApplicantAPI/add", {
            apl_firstName: formik.values.firstName,
            apl_lastName: formik.values.lastName,
            apl_email: formik.values.emailAddress,
            apl_documentCV: resPDF.data.secure_url,
            apl_documentPhoto: res.data.secure_url,
            apl_position: parseInt(jobid),
            apl_status: 1,
          })
          .then(() => {
            setUploading(false);
            unhideOtherComponents();
          })
          .catch((error) => {
            console.log(error);
            console.log(postRequest.data);
          });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      navigate("/confirmation", { state: { firstName: values.firstName } });
    },
  });
  function handleInputTileBorderColor(touched, hasErrorMessage) {
    if (!touched) {
      return "black";
    } else {
      if (hasErrorMessage) {
        return "red";
      } else {
        return "#4E9E32";
      }
    }
  }

  return uploading ? (
    <Loading />
  ) : (
    <div className="application-form-content">
      <img
        id="application-illustration"
        src="../../assets/images/application-form/illustration.png"
        alt="illustration"
      />
      <div className="application-form-txt">
        <h2>You're almost there!</h2>
        <p id="application-form-prompt">
          We’re excited to have you onboard, but before we do that, let’s get to
          know you a little more first.
        </p>
        <div className="application-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="row-container">
              <InputTile
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "input-tile-error"
                    : "input-tile-success"
                }
                field="First Name"
                placeholder="John"
                inputType="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                errorMessage={formik.errors.firstName}
                errorVisibility={
                  formik.touched.firstName && formik.errors.firstName
                    ? "visible"
                    : "hidden"
                }
                borderColor={handleInputTileBorderColor(
                  formik.touched.firstName,
                  formik.errors.firstName
                )}
                onBlur={formik.handleBlur}
              />
              <InputTile
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? "input-tile-error"
                    : "input-tile-success"
                }
                field="Last Name"
                placeholder="Doe"
                inputType="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                errorMessage={formik.errors.lastName}
                errorVisibility={
                  formik.touched.lastName && formik.errors.lastName
                    ? "visible"
                    : "hidden"
                }
                borderColor={handleInputTileBorderColor(
                  formik.touched.lastName,
                  formik.errors.lastName
                )}
                onBlur={formik.handleBlur}
              />
            </div>
            <InputTile
              className={
                formik.touched.emailAddress && formik.errors.emailAddress
                  ? "input-tile-error"
                  : "input-tile-success"
              }
              inputWidth="27.8125rem"
              field="Email Address"
              placeholder="doe.john@alliance.ph"
              inputType="email"
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              errorMessage={formik.errors.emailAddress}
              errorVisibility={
                formik.touched.emailAddress && formik.errors.emailAddress
                  ? "visible"
                  : "hidden"
              }
              borderColor={handleInputTileBorderColor(
                formik.touched.emailAddress,
                formik.errors.emailAddress
              )}
              onBlur={formik.handleBlur}
            />
            <div className="row-container">
              <FileTile
                btnText={
                  formik.values.curriculumVitae === ""
                    ? "Upload CV"
                    : formik.values.curriculumVitae.name
                }
                name="curriculumVitae"
                field="Curriculum Vitae (CV)"
                errorMessage={
                  formik.touched.curriculumVitae
                    ? formik.errors.curriculumVitae
                    : ""
                }
                onChange={(e) => {
                  const cvFile = e.target.files[0];
                  if (cvFile)
                    formik.setFieldValue("curriculumVitae", e.target.files[0]);
                }}
                accept=".pdf"
                defaultMessage="File Format: PDF"
              />
              <FileTile
                btnText={
                  formik.values.applicantPhoto === ""
                    ? "Upload Photo"
                    : formik.values.applicantPhoto.name
                }
                accept=".png, .jpeg"
                name="applicantPhoto"
                field="Photo of Yourself"
                errorMessage={
                  formik.touched.applicantPhoto
                    ? formik.errors.applicantPhoto
                    : ""
                }
                onChange={(value) => {
                  const photoFile = value.target.files[0];
                  if (photoFile) {
                    formik.setFieldValue(
                      "applicantPhoto",
                      value.target.files[0]
                    );
                  }
                }}
                defaultMessage="File Format: JPEG & PNG"
              />
            </div>
            <div className="row-container submit">
              <button id="play-link" type="submit">
                <img
                  id="play-button"
                  src="../../assets/images/landing-content/play-button.png"
                  alt="play-button"
                />
              </button>
              <button id="submit-application" type="submit">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormContent;
