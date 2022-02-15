module.exports = {

  attributes: {
    ClientID: {
      model: 'Client'
    },
    MarketID: {
      model: 'Market'
    },
    Date: {
      type: 'datetime'
    },
    InvestAmt: {
      type: 'FLOAT'
    },
    Profit: {
      type: 'FLOAT'
    },
    AmtAdded: { 
      type: 'FLOAT'
    },
    AmtWithdrawn: {
      type: 'FLOAT'
    },
    ProfitDailyComm: {
      type: 'FLOAT'
    },
    CapitalDailyComm: {
      type: 'FLOAT'
    },
    ProfitComm: {
      type: 'FLOAT'
    },
    CapitalComm: {
      type: 'FLOAT'
    },
    YearStart: {
      type: 'boolean'
    },
    InvestmentYear: {
      type: 'int'
    }
  }
};
