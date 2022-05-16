import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./task/Task";
import "./Tasks.css";
import AddModal from "./modals/AddModal";

const Tasks = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_LINK + "/tasks/")
      .then((list) => {
        setTasksList(list.data);
      })
      .catch((err) => {
        console.log("Err");
        console.log(err);
      });
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="flex-container">
      <div style={{ padding: "10px", width: "100%", textAlign: "left" }}>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add task
        </Fab>
      </div>
      <br />
      <AddModal handleClose={handleClose} open={open} />
      {tasksList.length > 0 &&
        tasksList.map((x, index) => (
          <Task
            title={x.title}
            description={x.description}
            done={x.done}
            priority={x.priority}
            user={x.user}
            key={index}
          />
        ))}
    </div>
  );
};

export default Tasks;
