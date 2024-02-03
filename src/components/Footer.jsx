import React from "react";
import { footerVariants, navVariants, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="h-[calc(389px+73px)]">
      <div className="h-[389px] bg-mainYellow flex items-center justify-center">
        <motion.div
          className="w-[502px]"
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <h1 className=" text-center font-[ceraProBold] text-[36px] leading-[40.5px] text-mainBlack">
            Sign up to our beta form
          </h1>
          <p className="mt-[17px] mb-[53px] font-[ceraProLight] text-center  text-[20px] leading-[23px] text-mainBlack">
            Sign up to our mailing list to find out more information and keep up
            to date about our activities
          </p>
          <div className="flex gap-[11px] h-[48px]">
            <input
              type="email"
              placeholder="email"
              className="h-full text-white flex-1 bg-transparent pl-[36px] border-[2px] border-white outline-none custom-placeholder-color"
            />
            <button className="outline-none border-none h-full bg-mainBlack text-[16px] text-white w-[157px]">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
      <div className="h-[73px] bg-darkYellow ">
        <motion.div
          className="h-full px-[139px] flex items-center justify-between text-white text-[11px] font-[ceraProLight]"
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
