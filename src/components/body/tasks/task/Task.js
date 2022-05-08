import React from "react";
import "./Task.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Task = (props) => {
  return (
    <Card sx={{ minWidth: 275 }} id="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Sub heading
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share">
          {props.done ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>

        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
  // return <div className="box-container" style={{backgroundColor: props.priority==1?'#ff8b87':props.priority==2?'#fffdb0':'#fff'}}>
  //     {props.done?<strike><h3>{props.title}</h3></strike>:<h3>{props.title}</h3>}
  //     {props.done?<p className="description"><strike>{props.description}</strike></p>:<p className="description">{props.description}</p>}
  //     <button>Done</button>
  // </div>;
};

export default Task;
