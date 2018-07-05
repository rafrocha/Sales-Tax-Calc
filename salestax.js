var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

function add(a, b) {
  return a + b;
}

function calculateTax(company) {
  var salesTax = 0;
  for (var i = 0; i < companySalesData.length; i++) {
    if (companySalesData[i].name === company) {
      salesTax += salesTaxRates[companySalesData[i].province] * companySalesData[i].sales.reduce(add, 0);
    }
  }
  return salesTax;
}

function calculateSales(company) {
  var sales = 0;
  for (var i = 0; i < companySalesData.length; i++) {
    if (companySalesData[i].name === company) {
      sales += companySalesData[i].sales.reduce(add, 0);
    }
  }
  return sales;
}

function calculateSalesTax(salesData, taxRates) {
  // variables
  var totalSales = 0;
  var totalTaxes = 0;
  var finalObject = {};
  // choose company
  for (var i = 0; i < salesData.length; i++) {
    var name = salesData[i].name;
    finalObject[name] = {};
    finalObject[name].totalSales = calculateSales(name);
    finalObject[name].totalTaxes = calculateTax(name);

  }
  return finalObject;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/