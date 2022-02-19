import React, { useEffect, useState } from "react";
import Task from "./task/Task";
import axios from "axios";

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
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tasksList.length > 0 &&
          tasksList.map((x, index) => (
            <Task title={x.title} description={x.description} key={index} />
          ))}
      </div>
    </>
  );
};

export default Tasks;
