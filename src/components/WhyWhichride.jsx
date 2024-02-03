import { reasons } from "../constants";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import Reason from "./Reason";

const WhyWhichride = () => {
  return (
    <div className="h-[913px] flex relative justify-center">
      <p className="absolute top-[100px] text-center w-full font-[ceraProBold] text-[36px] leading-[40.5px]">
        Why Whichride
      </p>
      <div className="bg-lightBlue  absolute top-0 left-0 w-[50%] h-full"></div>
      <div className="bg  bg-white absolute top-0 right-0"></div>
      <div className="w-[858px] mt-[199px] flex">
        <motion.div
          className="pr-[50px] flex-1"
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          {/* Display items with even indices */}
          {reasons.map((reason, index) => {
            if (index % 2 === 0) {
              return <Reason key={reason.id} {...reason} />;
            }
            return null; // Skip rendering for odd indices
          })}
        </motion.div>
        <motion.div
          className="pl-[50px] flex-1"
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          {/* Display items with odd indices */}
          {reasons.map((reason, index) => {
            if (index % 2 !== 0) {
              return <Reason key={reason.id} {...reason} />;
            }
            return null; // Skip rendering for even indices
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyWhichride;
