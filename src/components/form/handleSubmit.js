"use server";

import { executeQueryDB2 } from "@/db";

export const handleSubmit = async (projectID, employeeID, projectName) => {
  try {
    const response = await executeQueryDB2({
      query:
        "INSERT INTO Projects (ProjectID, EmployeeID, ProjectName) VALUES (?, ?, ?)",
      values: [projectID, employeeID, projectName],
    });

    console.log(response);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
