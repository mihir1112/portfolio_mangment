module.exports = {

  attributes: {
    InvestmentBreakup: {
      collection: 'InvestmentBreakup',
      via: 'InvestmentID'
    },
    ClientID: {
      model: 'Client'
    },
    Amount: {
      type: 'FLOAT'
    },
    AW:{
      type:'string'
    },
    Date:{
      type: 'datetime'
    }
  }
};
