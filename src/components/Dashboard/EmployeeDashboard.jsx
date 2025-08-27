import React from "react";
import Header from "../other/Header";
import TaskList from "../TaskList/TaskList";
import Tasks from "../other/Tasks";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <Tasks data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
