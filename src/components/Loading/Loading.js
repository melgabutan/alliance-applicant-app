import "./Loading.css";
import Lottie from "lottie-react";
import loadingLottie from "../../paperplane.json";
// TODO: Make Design Responsive

const Loading = () => {
  return (
    <div className="loading">
      <Lottie
        className="loading-lottie"
        animationData={loadingLottie}
        loop={true}
      />
    </div>
  );
};

export default Loading;
