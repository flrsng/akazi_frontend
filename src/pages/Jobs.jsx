import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/jobs") // backend port updated
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched jobs:", data); // Debugging
        setJobs(data);
      })
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
