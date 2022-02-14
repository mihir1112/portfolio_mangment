module.exports = {

  attributes: {
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

