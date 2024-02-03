import { whichRideHeroImg } from "../assets/images";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="pl-[129px] pr-[76px] flex min-h-[550px] h-[calc(100vh-85px)] ">
      <motion.div
        className="flex-1 pt-[250px] text-mainBlack "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <h1 className="font-[ceraProBold] text-[48px] leading-[53px]">
          Compare & book
        </h1>
        <h1 className="font-[ceraProBold] text-[48px] leading-[53px] w-full">
          ride-hailing providers
        </h1>
        <p className="font-[ceraProLight] mt-[20px] text-[20px] leading-[23px] text-mainGray">
          Save money and time with WhichrRide.
        </p>
        <p className="font-[ceraProLight] font-medium text-[20px] leading-[23px] text-mainGray">
          Think Compare the market but for taxis.
        </p>
      </motion.div>
      <motion.div
        className="pr-[67px]  "
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <img
          src={whichRideHeroImg}
          alt="heroImg"
          className="w-[577px] h-[551px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
