import { executeQuery } from "./db";

export default function Home() {
  let fetchDataResults;
  let firstPerson;
  const fetchData = async () => {
    // const [firstDbResults] = await Promise.all([
    //   pool.query(
    //     "SELECT Employees.FirstName, Employees.LastName, Projects.ProjectName FROM Employees INNER JOIN ProjectDB.Projects ON Employees.EmployeeID = ProjectDB.Projects.EmployeeID;"
    //   ),
    // ]);
    // const results = firstDbResults[0];
    const results = await executeQuery({
      query:
        "SELECT Employees.FirstName, Employees.LastName, Projects.ProjectName FROM Employees INNER JOIN ProjectDB.Projects ON Employees.EmployeeID = ProjectDB.Projects.EmployeeID",
      values: [],
    });

    return results;
  };
  const fetchDataAndLogResults = async () => {
    fetchDataResults = await fetchData();
    console.log("results", fetchDataResults);
    firstPerson = fetchDataResults[0];
    console.log("FirstName:", firstPerson.FirstName);
    console.log("LastName:", firstPerson.LastName);
    console.log("ProjectName:", firstPerson.ProjectName);
  };

  fetchDataAndLogResults();

  return (
    <>
      <h1>Selamat Datang</h1>
    </>
  );
}
