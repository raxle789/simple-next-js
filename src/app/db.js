import mysql from "serverless-mysql";
const db1 = mysql({
  config: {
    host: "127.0.0.1",
    port: "3306",
    database: "employeedb",
    user: "root",
    password: "",
  },
});

const db2 = mysql({
  config: {
    host: "127.0.0.1",
    port: "3306",
    database: "projectdb",
    user: "root",
    password: "",
  },
});

export const executeQuery = async ({ query, values }) => {
  try {
    const results = await db1.query(query, values);
    await db1.end();
    return results;
  } catch (error) {
    return { error };
  }
};
