import React from "react";
import check from "../assets/check.svg";

const Completed = () => {
  return (
    <div className="flex cursor-pointer overflow-hidden shadow-[var(--shadow-completed-btn)] active:shadow-none transition-shadow duration-200 ease shadow-md bg-[var(--background-completed-btn)] rounded-2xl w-full px-5 py-[15px] gap-2 font-semibold">
      <img src={check} alt="checked" className="w-[20px]" />
      <h2>Start Small, Finish Big - <span className=" font-bold text-[black]">'Big Fish🐋'</span></h2>
    </div>
  );
};

export default Completed;
