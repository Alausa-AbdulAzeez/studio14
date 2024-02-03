import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { mainLogo, whichRideLogo } from "../assets/images";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className={` h-[85px] flex w-full justify-between pl-[125px] pr-[130px]`}
    >
      <div className="  flex items-end ">
        <img src={mainLogo} alt="whichride Logo" />
      </div>
      <div className="">
        <ul className=" flex gap-[33px]  mt-[55px] text-mainBlack font-[ceraProBold]">
          {navLinks?.map((item, index) => {
            return (
              <NavLink
                key={index}
                style={{ textDecoration: "none" }}
                to={item.url}
              >
                {({ isActive }) => (
                  <li
                    className={` text-[14px] font-light ${
                      isActive ? "text-mainBlack " : "text-mainBlack"
                    }`}
                  >
                    {item?.title}
                  </li>
                )}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
