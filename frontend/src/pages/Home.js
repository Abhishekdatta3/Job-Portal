import React, { useEffect, useState } from "react";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:8080/jobs");
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async () => {
    await fetch("http://localhost:8080/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    fetchJobs();
  };

  const searchJobs = async () => {
    const res = await fetch(`http://localhost:8080/jobs/search?keyword=${search}`);
    const data = await res.json();
    setJobs(data);
  };

  const uploadResume = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    });

    alert("Resume Uploaded");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>

      <div className="container">
        <h3>Add Job</h3>

        <input placeholder="Title" onChange={(e) => setJob({ ...job, title: e.target.value })} />
        <input placeholder="Company" onChange={(e) => setJob({ ...job, company: e.target.value })} />
        <input placeholder="Location" onChange={(e) => setJob({ ...job, location: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setJob({ ...job, description: e.target.value })} />

        <button onClick={addJob}>Add Job</button>
      </div>

      <div className="container">
        <h3>Search Jobs</h3>
        <input placeholder="Keyword" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchJobs}>Search</button>
      </div>

      <h3 style={{ textAlign: "center" }}>Job List</h3>

      {jobs.map((j) => (
        <div className="job-card" key={j.id}>
          <h4>{j.title}</h4>
          <p><b>{j.company}</b></p>
          <p>{j.location}</p>
          <p>{j.description}</p>
        </div>
      ))}

      <div className="container">
        <h3>Upload Resume</h3>
        <input type="file" onChange={(e) => uploadResume(e.target.files[0])} />
      </div>
    </div>
  );
}

export default Home;