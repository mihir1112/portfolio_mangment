module.exports = {

  attributes: {
    InvestmentBreakup: {
      collection: 'InvestmentBreakup',
      via: 'ClientID'
    },
    Investments: {
      collection: 'Investment',
      via: 'ClientID'
    },
    Name: {
      type: 'string'
    },
    Email: {
      type: 'string'
    },
    Phone: {
      type: 'string'
    }
  }
};
