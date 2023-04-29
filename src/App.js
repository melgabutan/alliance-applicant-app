import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import ServicesPage from "./pages/ServicesPage";
import JoinTeamPage from "./pages/JoinTeamPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AvailableJobsPage from "./pages/AvailableJobsPage";
import JobInformationPage from "./pages/JobInformationPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/company-profile" element={<CompanyProfilePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/join-team" element={<JoinTeamPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/available-jobs/:deptid" element={<AvailableJobsPage />} />
      <Route path="/job-information/:jobid" element={<JobInformationPage />} />
      <Route path="/application-form/:posname/:jobid" element={<ApplicationFormPage />} />
    </Routes>
  );
}
export default App;
