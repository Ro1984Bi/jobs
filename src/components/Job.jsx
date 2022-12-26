import React from "react";
import "../css/Job.css";
import { BsTrash } from "react-icons/bs";

function Job({ id, text, completed, completedJob, deleteJob }) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={() => completedJob(id)}>
        {text}
      </div>
       <div className="task-container-icon" onClick={() => deleteJob(id)}>
        <BsTrash className="task-icon" />
      </div>
    </div>
  );
}

export default Job;
