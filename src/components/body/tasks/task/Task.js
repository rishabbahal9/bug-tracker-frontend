import React from "react";

const Task = (props) => {
  return <div style={{border: '3px solid black', borderRadius: '10px', width: '30%', margin:'20px auto', padding: '20px'}}>
      <h3>{props.title}</h3>
      <p style={{textAlign: 'left'}}>{props.description}</p>
  </div>;
};

export default Task;
