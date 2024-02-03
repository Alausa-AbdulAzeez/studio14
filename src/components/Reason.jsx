import React from "react";

const Reason = ({ img, title, content }) => {
  return (
    <div className="flex flex-col gap-[19px] mb-[60px] w-full">
      <div className="w-[64px] h-[64px]">
        <img src={img} alt={title} className="w-full h-full" />
      </div>
      <div className="font-[ceraProBold] text-[20px] leading-[22.5px]">
        {title}
      </div>
      <div className="font-[ceraProLight] text-[18px] leading-[21.6px]">
        {content}
      </div>
    </div>
  );
};

export default Reason;
