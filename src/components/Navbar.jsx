import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { mainLogo, whichRideIcon } from "../assets/images";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className={` h-[85px] max-sm:h-[55px] flex w-full justify-between pl-[125px] pr-[130px] max-sm:pl-[20px] max-sm:pr-[20px]  max-md:pr-[50px] max-md:pl-[50px] max-lg:pr-[80px] max-lg:pl-[80px]  max-sm:pt-2 `}
    >
      <div className="flex items-end max-md:items-center">
        <Link to={"/"}>
          <img
            src={mainLogo}
            alt="whichride Logo"
            className="hidden sm:block"
          />
        </Link>
        <Link to={"/"}>
          <img src={whichRideIcon} alt="whichride Logo" className="sm:hidden" />
        </Link>
      </div>
      <div className="max-md:flex max-md:items-center">
        <ul className=" flex gap-[33px]  mt-[55px] max-md:mt-0 text-mainBlack font-[ceraProBold] max-md:gap-5 ">
          {navLinks?.map((item, index) => {
            return (
              <NavLink
                key={index}
                style={{ textDecoration: "none" }}
                to={item.url}
              >
                {({ isActive }) => (
                  <li
                    className={` text-[14px] font-light max-sm:text-[12px] ${
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
