const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees
    .filter(employee => employee.department === 'HR')
    const hrEmployeesDisplay = hrEmployees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay.join('');
}

function findEmployeeById(id) {
    const employee = employees.find(employee => employee.id === employeeId);
    if (employee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee with ID ${id} not found.</p>`;
    }
}