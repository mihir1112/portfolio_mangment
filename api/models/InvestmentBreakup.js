module.exports = {

  attributes: {
    InvestmentID: {
      model: 'Investment'
    },
    MarketID: {
      model: 'Market'
    },
    ClientID: {
      model: 'Client'
    },
    InvestPer:{
      type: 'FLOAT'
    },
    InvestAmt:{
      type: 'FLOAT'
    },
    InvestmentYear:{
      type: 'int'
    },
    // StartDate:{
    //   type: 'datetime'
    // },
    // EndDate:{
    //   type: 'datetime'
    // },
    // ClientEndDateInvestment:{
    //   type: 'FLOAT'
    // },
    // ClientEndDateProfit:{
    //   type: 'FLOAT'
    // },
    // CombEndDateProfit:{
    //   type: 'FLOAT'
    // },
    // CombEndDateInvestment:{
    //   type: 'FLOAT'
    // },
    // ClientProfitComm:{
    //   type: 'FLOAT'
    // },
    // ClientInvestmentComm:{
    //   type: 'FLOAT'
    // },
  }
};
