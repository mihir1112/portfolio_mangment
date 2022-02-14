module.exports = {

  attributes: {
    InvestmentBreakup: {
      collection: 'InvestmentBreakup',
      via: 'MarketID'
    },
    CombinedInvestment: {
      collection: 'CombinedInvestment',
      via: 'MarketID'
    },
    ClientDailyStatus: {
      collection: 'ClientDailyStatus',
      via: 'MarketID'
    },
    Market: {
      type: 'string'
    },
    Active: {
      type: 'boolean'
    }
  }
};
