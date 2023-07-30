import React from "react";
import cancel from "../../assets/multiply.svg";
import { Link } from "react-router-dom";
import { Form } from "../../component/export";

const AddNew = ({
  taskValue,
  handleTask,
  dateValue,
  handleDate,
  emojiValue,
  handleEmoji,
  handleSubmit,
}) => {
  const addNewStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <div
      style={addNewStyle}
      className="add-new text-[var(--theme-color-dark-1)] flex flex-col   pt-16 pb-16 px-[0.5rem] md:my-24 rounded-2xl "
    >
      <div className=" flex flex-col-reverse gap-8">
        <h1 className="text-[1.5rem] font-semibold ml-3 ">Add New</h1>

        <Link
          to="/"
          className=" rounded-full active:scale-110  w-fit h-fit p-2 "
        >
          <img
            src={cancel}
            alt="add new list"
            className="  w-[25px] h-[25px]"
          />
        </Link>
      </div>

      <div className="text-[#fff] mt-16 ">
        <Form
          taskValue={taskValue}
          handleTask={handleTask}
          dateValue={dateValue}
          handleDate={handleDate}
          emojiValue={emojiValue}
          handleEmoji={handleEmoji}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddNew;
