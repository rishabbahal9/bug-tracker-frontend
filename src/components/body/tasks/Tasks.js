import React from "react";
import Task from "./task/Task";

const Tasks = () => {
    const tasksList=[
        {title: 'Heading 1', description: 'description 1'},
        {title: 'Heading 2', description: 'description 2'},
        {title: 'Heading 3', description: 'description 3'},
    ];
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {tasksList.map((x,index)=><Task title={x.title} description={x.description} key={index}/>)}
      </div>
    </>
  );
};

export default Tasks;
