import React, { useState } from "react";
import JobForm from "./JobForm";
import "../css/JobsList.css";
import Job from "./Job";

function JobsList() {
  const [jobs, setJobs] = useState([]);

  const addJob = job => {
    if (job.text.trim()) {
        job.text = job.text.trim()

        const updatedJobs = [job, ...jobs]
        setJobs(updatedJobs)
    }
  }

  const deleteJobs = id => {
    const updatedJobs = jobs.filter(job => job.id !== id)
    setJobs(updatedJobs)
  }

  const completedJob = id => {
    const updatedJobs = jobs.map(job => {
      if (job.id === id) {
        job.completed = !job.completed
      } 
      return job
    })
    setJobs(updatedJobs)
  }

  return (
    <>
      <JobForm onSubmit={addJob}/>
      <div className="jobs-list">
        {jobs.map((job) => (
          <Job
          key={job.id}
          id={job.id}
           text={job.text}
          completed={job.completed}
          deleteJob={deleteJobs}
          completedJob={completedJob} />
        ))}
    
      </div>
    </>
  );
}

export default JobsList;
