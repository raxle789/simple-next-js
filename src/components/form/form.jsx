"use client";

import { useState } from "react";
import { handleSubmit } from "./handleSubmit";

export const Form = () => {
  const [projectID, setProjectID] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [projectName, setProjectName] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    handleSubmit(projectID, employeeID, projectName);
    console.log(employeeID);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label>
          Project ID:
          <input
            className="border"
            type="text"
            value={projectID}
            onChange={(e) => setProjectID(e.target.value)}
          />
        </label>
        <br />
        <label>
          Employee ID:
          <input
            className="border"
            type="text"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
        </label>
        <br />
        <label>
          Project Name:
          <input
            className="border"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Kirim Data</button>
      </form>
    </>
  );
};
