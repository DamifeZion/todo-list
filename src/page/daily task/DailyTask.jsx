import React from "react";
import { Tasks, Completed } from "../../component/export";
import add from "../../assets/add.svg";
import { Link } from "react-router-dom";

const DailyTask = ({ todos, deleteItem }) => {
  return (
    <div className="daily-task text-[var(--theme-color-dark-1)] flex flex-col rounded-2xl overflow-y-scroll   max-h-[700px] md:my-24 pt-[4rem] pb-[2rem] px-[0.5rem]">
      <h1 className="text-[1.5rem] font-semibold ml-3">Daily Tasks</h1>
      <div className=" mt-5">
        <Completed />
      </div>
      <h3 className="text-[1rem] font-medium   mt-10 ml-3">To Do Tasks</h3>
      <div className="flex flex-col gap-5 mt-3 mb-24">
        {todos.map((item) => (
          <Tasks
            key={item.id}
            task={item.task}
            date={item.date}
            emoji={item.emoji}
            handleDelete={() => deleteItem(item.id)}
          />
        ))}
      </div>

      <Link
        to="/add-task"
        className="place-self-center rounded-full bg-[var(--bg-add-btn)] text-[#fff] active:shadow-md active:scale-110  w-fit h-fit p-2 absolute bottom-9 md:static"
      >
        <img src={add} alt="add new list" className="w-[30px] h-[30px]" />
      </Link>
    </div>
  );
};

export default DailyTask;
