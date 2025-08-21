const Employee = require("../models/employeeModel");

// Show form
exports.showForm = (req, res) => {
  res.render("index");
};

// Save employee
exports.addEmployee = async (req, res) => {
  try {
    const { fname, lname, age, description, gender, hobbies, department } = req.body;

    const employee = new Employee({
      fname,
      lname,
      age,
      description,
      gender,
      hobbies: Array.isArray(hobbies) ? hobbies : [hobbies], // handles single/multiple checkboxes
      department
    });

    await employee.save();
    res.redirect("/employees");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// List employees
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.render("list", { employees });
};

// Edit employee
exports.editEmployeeForm = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render("edit", { employee });
};

// Update employee
exports.updateEmployee = async (req, res) => {
  const { fname, lname, age, description, gender, hobbies, department } = req.body;

  await Employee.findByIdAndUpdate(req.params.id, {
    fname,
    lname,
    age,
    description,
    gender,
    hobbies: Array.isArray(hobbies) ? hobbies : [hobbies],
    department
  });

  res.redirect("/employees");
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/employees");
};
