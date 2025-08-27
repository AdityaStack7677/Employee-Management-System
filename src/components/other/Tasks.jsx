import React from "react";
import ActiveTask from "../TaskList/ActiveTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const Tasks = ({ data }) => {
  return (
    <div
      id="tasks"
      className="h-[50%] overflow-x-auto flex flex-nowrap items-center justify-start gap-5 w-full py-5  mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <ActiveTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasks;
