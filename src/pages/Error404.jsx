import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="h-[100vh] min-h-[600px] flex flex-col justify-center items-center gap-3">
        <h1 className="font-[ceraProBold] text-mainBlack text-[48px] max-sm:text-[30px] max-lg:text-[38px]">
          Page not found
        </h1>

        <Link to={"/"} className="bg-mainBlack text-white px-6 py-3">
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default Error404;
