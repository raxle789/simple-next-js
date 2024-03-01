"use client";
import { executeQueryDB1 } from "@/db";

export default function JoinPage() {
  const fetchData = async () => {
    const results = await executeQueryDB1({
      query:
        "SELECT Employees.FirstName, Employees.LastName, Projects.ProjectName FROM Employees INNER JOIN ProjectDB.Projects ON Employees.EmployeeID = ProjectDB.Projects.EmployeeID",
      values: [],
    });

    return results;
  };

  const fetchDataAndLogResults = async () => {
    const fetchDataResults = await fetchData();
    console.log("results", fetchDataResults);
  };

  fetchDataAndLogResults();
  return <h1>JoinPage</h1>;
}
