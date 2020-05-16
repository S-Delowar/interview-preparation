var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.__proto__.company
  console.log(emp1.company);