const { Stock } = require('../models');

const stockdata = [
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
  },
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
  },
];

const seedStock = () => Stock.bulkCreate(stockdata);

module.exports = seedStock;
