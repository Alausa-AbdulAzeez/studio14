import { footerVariants, navVariants, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="min-h-[calc(389px+73px)] ">
      <div className="min-h-[389px] bg-mainYellow flex items-center justify-center max-sm:px-[20px] max-lg:px-[50px] max-md:py-[30px]">
        <motion.div
          className="w-[502px] h-full max-sm:w-[90%] max-md:w-[80%]"
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <h1 className=" text-center font-[ceraProBold] text-[36px] leading-[40.5px] text-mainBlack max-sm:text-[24px] max-lg:text-[38px] max-sm:leading-[1.3]">
            Sign up to our beta form
          </h1>
          <p className="mt-[17px] mb-[53px] font-[ceraProLight] text-center  text-[20px] leading-[23px] text-mainBlack text-wrap">
            Sign up to our mailing list to find out more information and keep up
            to date about our activities
          </p>
          <div className="flex gap-[11px] min-h-[48px] max-sm:flex-col">
            <input
              type="email"
              placeholder="email"
              className="h-[48px] text-white flex-1 max-md:flex-none bg-transparent pl-[36px] border-[2px] border-white outline-none custom-placeholder-color"
            />
            <button className="outline-none border-none h-[48px] bg-mainBlack text-[16px] text-white w-[157px]">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
      <div className="h-[73px] bg-darkYellow ">
        <motion.div
          className="h-full px-[139px]  flex items-center max-sm:flex-col max-sm:justify-center max-sm:gap-3 justify-between text-white text-[11px] font-[ceraProLight] max-sm:px-[20px] max-lg:px-[50px]"
          variants={footerVariants}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="">© 2020 Whichride - All rights reserved.</div>
          <div className=" flex gap-[10px]">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
