// Write your solution in this file!
const employee = {
  name: 'alex',
  streetAddress: 'nairobi'
}

function updateEmployeeWithKeyAndValue (employee,name, sam) {
  const newEmployee = {...employee}
  newEmployee[name] = sam;
  return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, sam) {
  employee[name] = sam;
  return employee;
}
function deleteFromEmployeeByKey (employee, name) {
  let newEmployee = {...employee}
  delete newEmployee[name]
  return newEmployee

}
function destructivelyDeleteFromEmployeeByKey (employee, name) {
  delete employee[name]
  return employee
}