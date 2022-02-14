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
    CombInvesID:{
     model:'CombinedInvestment'
    },
    InvestPer:{
      type: 'FLOAT'
    },
    InvestAmt:{
      type: 'FLOAT'
    },
    StartDate:{
      type: 'datetime'
    },
    EndDate:{
      type: 'datetime'
    },
    ClientEndDateInvestment:{
      type: 'FLOAT'
    },
    ClientEndDateProfit:{
      type: 'FLOAT'
    },
    CombEndDateProfit:{
      type: 'FLOAT'
    },
    CombEndDateInvestment:{
      type: 'FLOAT'
    },
    ClientProfitComm:{
      type: 'FLOAT'
    },
    ClientInvestmentComm:{
      type: 'FLOAT'
    },
  }
};
