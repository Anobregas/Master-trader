const { Stock } = require('../models');

const stockdata = [
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
    company_id: 1
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
    company_id: 2
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
    company_id: 3
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
    company_id: 4
  }
];

const seedStock = () => Stock.bulkCreate(stockdata);

module.exports = seedStock;
