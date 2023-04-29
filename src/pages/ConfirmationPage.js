import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  window.onpopstate = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
      className="confirmation-page"
    >
      <Navbar />
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          margin: "40px 0 35px",
        }}
      >
        Congratulations, {location.state.firstName}! 👏🏻
      </h2>
      <img
        style={{
          width: "21.875rem",
          height: "21.875rem",
        }}
        src="./assets/images/confirmation/illustration.png"
      />
      <p
        style={{
          margin: "35px auto auto",
          width: "40.625rem",
          fontSize: "1.25rem",
          lineHeight: "1.5",
          fontWeight: "300",
        }}
      >
        You’re one step closer towards your goals ✨. For further instructions,
        our recruitment team will be in touch <strong>via email</strong> within
        <strong> 2 - 3 working days</strong>. We can’t wait to have you onboard!
      </p>
    </div>
  );
};

export default ConfirmationPage;
