import React from "react";
import { iphoneX } from "../assets/images";
import { bookingSteps } from "../constants";
import BookingSteps from "./BookingSteps";
import { navVariants, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-[1110px] bg-mainPurple flex justify-center text-white">
      <div className="w-[842px] pt-[116px] pb-[146px] max-sm:pt-[50px] max-md:pt-[80px] max-md:pb-[80px]">
        <motion.div
          className="flex flex-col gap-[30px] items-center max-sm:px-[20px] max-md:px-[50px]"
          variants={navVariants}
          initial="hidden"
          whileInView={"show"}
        >
          <h1 className="text-center w-[80%] max-md:w-full font-[ceraProBold] text-[36px] leading-[40.5px] max-sm:text-[24px] max-lg:text-[38px] max-sm:leading-[1.3]">
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </h1>
          <p className="text-center w-[60%] max-md:w-full font-[ceraProLight]  text-[20px] leading-[23px] max-sm:text-[16px] ">
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </p>
        </motion.div>
        <div className="flex max-md:flex-col items-center max-sm:px-[20px] max-md:px-[50px]">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
          >
            <img src={iphoneX} alt="phone" />
          </motion.div>
          <div className="flex-1 flex flex-col justify-center gap-[39px]">
            {bookingSteps?.map((bookingStep, index) => (
              <BookingSteps
                key={bookingStep?.id}
                index={index + 1}
                mainText={bookingStep?.title}
                subText={bookingStep?.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
