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
    Market: {
      type: 'string'
    },
    Active: {
      type: 'boolean'
    }
  }
};
