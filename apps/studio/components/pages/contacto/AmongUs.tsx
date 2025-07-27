import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import AmongUsLottie from "public/assets/lottie/amongus5.json";

export default function AmongUs() {
  return (
    <Lottie animationData={AmongUsLottie} loop={true} className="lottie" />
  );
}
