import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "../css/pages/Applications.css"

const Applications = () => {
  const [Applications, setApplications] = useState([]);

  // Directly use backend URL
  const endpoint = "http://localhost:4000/Applications";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error fetching Applications:", err));
  }, []);

  return (
    <div className="applications">
      <h1>Applications</h1>
      {Applications.length > 0 ? (
        <div>
          {Applications.map((Application) => (
            <div class="application" key={Application.id || Application._id}>
                <h3>{Application.company}</h3>
                <h4>Title: {Application.title}</h4>
                <hr />
                <p>
                    {Application.description}
                </p>
                <i>(Posted: {format(new Date(Application.posted), "MMMM dd, yyyy")} - Deadline: {format(new Date(Application.deadline), "MMMM dd, yyyy")})</i>
            </div>
          ))}
        </div>
      ) : (
        <p>No Applications available</p>
      )}
    </div>
  );
};

export default Applications;
