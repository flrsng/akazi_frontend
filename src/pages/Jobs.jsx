import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "../css/pages/jobs.css"

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // Directly use backend URL
  const endpoint = "http://localhost:4000/api/jobs";

  useEffect(() => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log("API response:", data); // check the shape
      setJobs(data.jobs || data); // handles both { jobs: [...] } and [ ... ]
    })
    .catch((err) => console.error("Error fetching jobs:", err));
}, []);

  return (
    <div className="jobs">
      <div className="login right">
        <button>Create new job</button>
      </div>
      <h1>Jobs</h1>
      {jobs.length > 0 ? (
        <div>
          {jobs.map((job) => (
            <div className="job" key={job.id || job._id}>
                <button className="apply_btn right">Apply</button>
                <h3>{job.company}</h3>
                <h4><i>Title: {job.title}</i></h4>
                <hr />
                <p>
                    {job.description}
                </p>
                <i>(Posted: {format(new Date(job.posted), "MMMM dd, yyyy")} - Deadline: {format(new Date(job.deadline), "MMMM dd, yyyy")})</i>
                <p><a href={`/jobs/${job._id}`}>More details</a></p>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default Jobs;
