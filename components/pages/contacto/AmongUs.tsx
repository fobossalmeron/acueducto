import Lottie from "lottie-react";
import AmongUsLottie from "public/assets/lottie/amongus5.json";

export default function AmongUs() {
  return (
    <Lottie animationData={AmongUsLottie} loop={true} className="lottie" />
  );
}
