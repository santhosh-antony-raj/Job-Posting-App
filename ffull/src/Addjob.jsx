import React, { useState } from "react";
import styles from "./Addjob.module.css"; // Import CSS Module

const AddJob = () => {
  const [jobData, setJobData] = useState({
    jobid: "",
    jobname: "",
    description: "",
    techStack: [],
  });

  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleAddTechStack = () => {
    if (techInput.trim() !== "") {
      setJobData({ ...jobData, techStack: [...jobData.techStack, techInput] });
      setTechInput("");
    }
  };

  const handleRemoveTech = (index) => {
    const updatedTechStack = jobData.techStack.filter((_, i) => i !== index);
    setJobData({ ...jobData, techStack: updatedTechStack });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", jobData);

    try {
      const response = await fetch("http://localhost:8080/JobPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job added successfully!");
        setJobData({ jobid: "", jobname: "", description: "", techStack: [] });
      } else {
        alert("Failed to add job!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job ID:</label>
        <input type="number" name="jobid" value={jobData.jobid} onChange={handleChange} required />

        <label>Job Name:</label>
        <input type="text" name="jobname" value={jobData.jobname} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={jobData.description} onChange={handleChange} required></textarea>

        <label>Tech Stack:</label>
        <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)} />
        <button type="button" onClick={handleAddTechStack}>
          Add Tech
        </button>

        <ul className={styles.techList}>
          {jobData.techStack.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              {tech} <button type="button" className={styles.removeBtn} onClick={() => handleRemoveTech(index)}>X</button>
            </li>
          ))}
        </ul>

        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default AddJob;
