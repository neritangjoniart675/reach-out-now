Filename: advanced_code.js

/**
 * This code demonstrates a complex data processing algorithm using JavaScript. 
 * It takes an array of objects representing employees and their sales data,
 * performs various calculations, and generates a report with detailed analysis.
 */

// Employee class definition
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.sales = [];
  }

  addSale(sale) {
    this.sales.push(sale);
  }

  getTotalSales() {
    return this.sales.reduce((total, sale) => total + sale.amount, 0);
  }

  getAverageSales() {
    return this.getTotalSales() / this.sales.length;
  }
}

// SalesReport class definition
class SalesReport {
  constructor(employees) {
    this.employees = employees;
  }

  generateReport() {
    let report = 'Sales Report:\n\n';

    this.employees.forEach((employee) => {
      report += `Employee ID: ${employee.id}\n`;
      report += `Employee Name: ${employee.name}\n`;
      report += `Total Sales: ${employee.getTotalSales()}\n`;
      report += `Average Sales: ${employee.getAverageSales()}\n`;
      report += '\n';
    });

    return report;
  }
}

// Sample data initialization
const employees = [
  new Employee(1, 'John Doe'),
  new Employee(2, 'Jane Smith'),
  new Employee(3, 'Bob Johnson')
];

employees[0].addSale({ amount: 100 });
employees[0].addSale({ amount: 200 });
employees[0].addSale({ amount: 300 });

employees[1].addSale({ amount: 150 });
employees[1].addSale({ amount: 250 });

employees[2].addSale({ amount: 400 });
employees[2].addSale({ amount: 600 });
employees[2].addSale({ amount: 800 });

// Generate and print the sales report
const report = new SalesReport(employees).generateReport();
console.log(report);
