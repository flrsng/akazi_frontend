import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // Directly use backend URL
  const endpoint = "http://localhost:4000/jobs";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id || job._id}>{job.title}</li>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default Jobs;
