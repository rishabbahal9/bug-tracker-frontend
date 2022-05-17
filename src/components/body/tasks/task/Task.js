import React from "react";

import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

const Task = (props) => {
  const onDelete = () => {
    axios
      .delete(process.env.REACT_APP_BACKEND_LINK + "/tasks/" + props.id + "/")
      .then((response) => {
        console.log("response");
        console.log(response);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };
  const onDone = () => {
    axios
      .patch(process.env.REACT_APP_BACKEND_LINK + "/tasks/" + props.id + "/", {
        done: !props.done,
      })
      .then((response) => {
        console.log("response");
        console.log(response);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {/* <Typography sx={{ width: "80%", flexShrink: 0, textAlign: "left" }}> */}
        <div>
          <IconButton aria-label="share" style={{ zIndex: "+10" }}>
            {props.done ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>
          {props.title}
          {props.priority === 2 ? (
            <LowPriorityIcon style={{ margin: "10px" }} />
          ) : props.priority === 1 ? (
            <PriorityHighIcon style={{ color: "red" }} />
          ) : (
            <div></div>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails style={{ textAlign: "left" }}>
        <Typography color="text.secondary">{props.description}</Typography>
        <br />
        <br />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Edit</Button>
          <Button onClick={onDone}>Done</Button>
          <Button onClick={onDelete}>Delete</Button>
        </ButtonGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Task;
