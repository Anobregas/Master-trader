const User = require('./User');
const Stock = require('./Stock');
const Company = require('./Company');

Stock.hasMany(Company, {
  foreignKey: 'company_id',
});

Company.belongsTo(Stock, {
  foreignKey: 'company_id',
});

module.exports = { User, Stock, Company };
