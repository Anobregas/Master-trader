const { Company } = require('../models');

const companydata = [
  {
   description: 'tech',
   ceo: 'Joe',
   founded: 2003,
   headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
   ceo: 'Joe',
   founded: 2003,
   headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
  {
    description: 'tech',
    ceo: 'Joe',
    founded: 2003,
    headquarters: 'texas',
  },
];

const seedCompany = () => Company.bulkCreate(companydata);

module.exports = seedCompany
