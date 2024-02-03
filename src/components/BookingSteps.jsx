import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const BookingSteps = ({ index, mainText, subText }) => {
  return (
    <motion.div
      className={`flex items-center justify-center flex-row gap-[31px]`}
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("up", "spring", index * 0.5, 1)}
    >
      {" "}
      <div
        className={` flex items-center justify-center min-w-[59px] w-[59px] rounded-full h-[59px] text-black ${
          index === 1 ? "bg-mainYellow" : "bg-white"
        } `}
      >
        <p className="font-[ceraProLight] text-[14px]">Step {index}</p>
      </div>
      <div className="flex w-full justify-between items-center text-white">
        <div className="flex flex-col max-w-[650px] flex-1 gap-[16px]">
          <div className="font-[ceraProBold] text-[24px] leading-[27px]">
            {mainText}
          </div>

          <p className=" font-[ceraProLight]  text-[18px] leading-[20px]">
            {subText}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingSteps;
