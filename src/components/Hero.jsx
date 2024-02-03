import { whichRideHeroImg } from "../assets/images";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="pl-[129px] pr-[76px] flex min-h-[550px] max-h-[700px] h-[calc(100vh-85px)] max-xl:h-auto max-sm:pl-[20px] max-sm:pr-[20px] max-md:pr-[50px] max-md:pl-[50px] max-lg:pr-[80px] max-lg:pl-[80px] max-lg:flex-col">
      <motion.div
        className="flex-1 max-lg:flex-none  pt-[250px] text-mainBlack max-md:py-[40px] max-lg:pt-[60px] max-xl:pt-[150px]"
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <h1 className="font-[ceraProBold] text-[48px] leading-[53px] max-sm:text-[30px] max-lg:text-[38px] max-sm:leading-[1.3]">
          Compare & book
        </h1>
        <h1 className="font-[ceraProBold] text-[48px] leading-[53px] w-full max-sm:text-[30px] max-lg:text-[38px] max-sm:leading-[1.3]">
          ride-hailing providers
        </h1>
        <p className="font-[ceraProLight] mt-[20px] text-[20px] leading-[23px] text-mainGray max-sm:text-[16px]">
          Save money and time with WhichrRide.
        </p>
        <p className="font-[ceraProLight] font-medium text-[20px] leading-[23px] text-mainGray max-sm:text-[16px]">
          Think Compare the market but for taxis.
        </p>
      </motion.div>
      <motion.div
        className="pr-[67px] max-xl:pr-0 max-lg:flex max-lg:justify-end"
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <img
          src={whichRideHeroImg}
          alt="heroImg"
          className="w-[577px] h-[551px] max-md:w-[350px] max-md:h-[334px] max-xl:w-[420px] max-xl:h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
