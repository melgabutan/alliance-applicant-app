import Navbar from "../components/Navbar/Navbar";
import ApplicationFormContent from "../components/ApplicationFormContent/ApplicationFormContent";
import { useState } from "react";

const ApplicationFormPage = () => {
  const [showOtherComponents, setShowOtherComponents] = useState(true);
  const hideOtherComponents = () => {
    setShowOtherComponents(false);
  };
  const unhideOtherComponents = () => {
    setShowOtherComponents(true);
  };
  return (
    <div className="application-form-page">
      {showOtherComponents && <Navbar />}

      <ApplicationFormContent
        hideOtherComponents={hideOtherComponents}
        unhideOtherComponents={unhideOtherComponents}
      />
    </div>
  );
};

export default ApplicationFormPage;
