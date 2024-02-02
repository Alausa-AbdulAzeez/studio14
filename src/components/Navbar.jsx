import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import { whichRideLogo } from '../assets/images'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView={'show'}
      className={` h-[85px] flex bg-red-900 w-full`}
    >
      <div className='w-[168px] h-[40px]'>
        <img
          src={whichRideLogo}
          alt='whichride Logo'
          className='w-full h-full'
        />
      </div>
      <div className=''>
        <ul className='w-[90%] flex  h-full items-center justify-evenly max-md:hidden z-[4] bg-white'>
          {navLinks?.map((item, index) => {
            return (
              <NavLink
                key={index}
                style={{ textDecoration: 'none' }}
                to={item.url}
              >
                {({ isActive }) => (
                  <li
                    className={`leading-normal text-[14px]   font-semibold ${
                      isActive
                        ? 'text-[#575757] underline underline-offset-4'
                        : 'text-[#aaaaaa]'
                    }`}
                  >
                    {item?.title}
                  </li>
                )}
              </NavLink>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
