import React from "react";

const Form = ({
  taskValue,
  handleTask,
  dateValue,
  handleDate,
  emojiValue,
  handleEmoji,
  handleSubmit,
}) => {
  {
    /**/
  }
  const inputStyle = {
    background: "transparent",
    fontSize: "1rem",
    fontWeight: "400",
    outline: "none",
    borderBottom: "2px solid var(--theme-color-light1)",

    paddingInline: "0.5rem",
    paddingTop: "0.3rem",
    paddingBottom: ".5rem",
  };

  return (
    <form
      action=""
      className="flex flex-col  gap-10 w-full"
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        onChange={handleTask}
        style={inputStyle}
        value={taskValue}
        placeholder="Task"
        className=" placeholder:text-[var(--theme-color-light2)] font-medium"
      />

      <input
        required
        type="date"
        style={inputStyle}
        onChange={handleDate}
        value={dateValue}
      />

      <input
        type="text"
        placeholder="Emoji🦅"
        style={inputStyle}
        onChange={handleEmoji}
        value={emojiValue}
        className=" placeholder:text-[var(--theme-color-light2)]"
      />

      <button type="submit" className=" bg-[var(--bg-add-btn)] rounded-3xl place-self-center  w-11/12 py-3 mt-16">
        📝 Create Tasks
      </button>
    </form>
  );
};

export default Form;
