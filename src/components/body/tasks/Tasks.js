import React, { useEffect, useState } from "react";
import Task from "./task/Task";
import axios from "axios";
import "./Tasks.css";

const Tasks = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/tasks/")
      .then((list) => {
        setTasksList(list.data);
      })
      .catch((err) => {
        console.log("Err");
        console.log(err);
      });
  }, []);

  return (
    <div id="flex-container" >
      {tasksList.length > 0 &&
        tasksList.map((x, index) => (
          <Task title={x.title} description={x.description} done={x.done} priority={x.priority} user={x.user} key={index} />
        ))}
    </div>
  );
};

export default Tasks;
