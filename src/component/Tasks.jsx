import React from "react";
import trash from "../assets/delete.svg";
import checklist from "../assets/checklist.svg";

const Tasks = ({ task, date, emoji, handleDelete }) => {
  return (
    <div className="task">
      <div className="flex overflow-hidden place-items-center gap-6 bg-[var(--theme-color-light1)] rounded-2xl px-4 py-5">
        <img src={checklist} alt="Check list" className=" w-[30px] h-[30px]" />

        <i className=" text-[2rem] w-[3.2rem] text-ellipsis overflow-hidden">
          {emoji}
        </i>

        <p className=" w-2/3 whitespace-nowrap text-ellipsis overflow-hidden font-medium">
          {task} <br />{" "}
          <span className="text-[0.7rem] font-normal text-[var(--theme-color-light2)] opacity-40">
            {date}
          </span>
        </p>

        <img
          src={trash}
          alt="delete"
          className=" delete w-[30px] active:scale-110 transition-scale duration-200"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Tasks;
