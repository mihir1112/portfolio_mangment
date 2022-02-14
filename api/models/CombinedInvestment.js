module.exports = {

  attributes: {
    InvestmentBreakup: {
      collection: 'InvestmentBreakup',
      via: 'CombInvesID'
    },
    MarketID: {
      model: 'Market'
    },
    TotalAmount: {
      type: 'FLOAT'
    },
    TotalPL: {
      type: 'FLOAT'
    },
    InvestmentYear:{
      type:'int'
    },
    Locked:{
      type:'boolean'
    }
  }
};

