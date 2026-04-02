import express from "express";
import employees from "#db/employees";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  response.send(employees[randomIndex]);
});

app.get("/employees/:id", (request, response) => {
  const id = Number(request.params.id);
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    response.status(404).send("Employee not found");
  } else {
    response.send(employee);
  }
});

export default app;
