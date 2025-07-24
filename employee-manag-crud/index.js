const express = require("express");
const app = express();
const port = 1503;
let employees = [];
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(employees);
  return res.render("index", {
    employees,
  });
});
app.get("/employee/delete/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((employee) => employee.id != id);
  return res.redirect("/");
});
app.get("/employee/edit/", (req, res) => {
  const { id } = req.query;
  let data = employees.find((employee) => employee.id == id);
  return res.render("edit", {
    data,
  });
});
app.post("/employee/edit/", (req, res) => {
  const { id } = req.query;

  employees = employees.map((employee) => {
    if (employee.id == id) {
      return {...employee,
        employee_name: req.body.employee_name,
        dep: req.body.dep,
        emp_salary: req.body.emp_salary,
      };
    }
    return employee;
  });

return res.redirect("/employee/table");

});
app.get("/employee/table", (req, res) => {
  return res.render("table", {
    employees,
  });
});


//task

app.get("/employee/tasks/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id == id);
  if (!employee) return res.send("Employee not found");

  res.render("tasks", { employee });
});

app.post("/employee/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  employees = employees.map((emp) => {
    if (emp.id == id) {
      emp.tasks.push(task);
    }
    return emp;
  });

  res.redirect(`/employee/tasks/${id}`);
});


app.post("/login", (req, res) => {
  const uniqueId = Date.now();
  let obj = {
    id: uniqueId,
    employee_id: uniqueId,
    employee_name: req.body.employee_name,
    dep: req.body.dep,
    emp_salary: req.body.emp_salary,
     tasks: [] 
  };

  employees.push(obj);
  console.log("Data added:", obj);
  return res.redirect("/employee/table");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server started.");
    console.log("http://localhost:" + port);
  }
});
