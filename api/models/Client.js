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
    ClientDailyStatus: {
      collection: 'ClientDailyStatus',
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
