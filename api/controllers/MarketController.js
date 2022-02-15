/**
 * MarketController
 *
 * @description :: Server-side logic for managing Markets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const { set } = require("grunt");

let moment = require('moment');
module.exports = {
  addmarket: async function (req, res) {
    try {
      console.log(req.body);
      let new_market = {
        Market :req.body.Market,
        Active : req.body.Active
      }
      let market = await Market.create(new_market);
      console.log(market,'new market')
      if(market){
        let new_combins ={
          MarketID:market.id,
          TotalAmount :0,
          TotalPL:0,
          InvestmentYear:moment().format('YYYY'),
          Locked:0
        }

        let cobmiins =  await CombinedInvestment.create(new_combins);
        console.log(cobmiins);
      }
      res.send('market');
    } catch (err) {
      console.log("error in market", err);
    }
  },
  market: async function (req, res) {
    try {
      let market = await Market.find({ select: ['id', 'Market'], where: { Active: 1 } });
      res.send(market);
    } catch (err) {
      console.log("error in market", err);
    }
  },

  combInv : async function(req,res){
    try{
      let market = await Market.find({ select: ['id', 'Market'], where: { Active: 1 } });
      let market_list = [];
      for(let i = 0 ; i< market.length ; i++){
        let combinv =  await CombinedInvestment.findOne({where : {MarketID : market[i].id ,Locked:0 },
          select:['MarketID','TotalAmount','TotalPL','InvestmentYear','Locked']});
        combinv.market =market[i].Market ;
        market_list.push(combinv);
        console.log(combinv);
      }

      return res.send(market_list);
    }catch(err){
      console.log("error in combInv", err);
    }
  },
  add: async function (req, res) {
    try {
      async function findValueByPrefix(obj, name) {
        let market_list = [];
        for (var prop in obj) {
          if (prop.indexOf(name) === 0) {
            const myArray = prop.split("_");
            let id = myArray[1];
            let combinenvs = await CombinedInvestment.findOne({where : { MarketID:id, Locked :0}});
            let inv_brk_pre = await InvestmentBreakup.findOne({where :{MarketID : id ,ClientID :req.body.client}}).sort('id desc').limit(1);
            let market = {
              MarketID: id,
              InvestPer: Number(obj[prop]),
              InvestAmt: Number(req.body.Amount) * Number(obj[prop]) / 100,
              InvestmentID:invs.id,
              ClientID : req.body.client,
              StartDate:req.body.date,
              CombInvesID :combinenvs.id,
              ClientEndDateInvestment :inv_brk_pre.ClientEndDateInvestment  + Number((req.body.Amount) * Number(obj[prop]) / 100)
            }
            market_list.push(market);
          }
        }
        return market_list;
      }

      let inverstmnet = {
        ClientID: req.body.client,
        Amount: Number(req.body.Amount),
        AW: 'A',
        Date: req.body.date
      }

      let invs = await Investment.create(inverstmnet);
      let ins_brk = await findValueByPrefix(req.body, "market");
      let ins_brk_store= await InvestmentBreakup.create(ins_brk);
      console.log(ins_brk_store,'InvestAmtInvestAmt');
      let combinenvs_list = [];
      for( let i =0;i <ins_brk.length; i++){
        let combinenvs_create ={
          MarketID: ins_brk[i].MarketID,
          TotalAmount: Number(ins_brk[i].InvestAmt),
          TotalPL: 0,
          InvestmentYear:ins_brk[i].StartDate.split("/")[2],
          Locked:0,
        }
        let sql = `update combinedinvestment set TotalAmount = TotalAmount + ${combinenvs_create.TotalAmount} where MarketID = ${combinenvs_create.MarketID} and Locked = 0`;
        CombinedInvestment.query(sql,[], function(err, rawResult) {
        });
        // let combinenvs_result = await CombinedInvestment.update({MarketID :combinenvs_create.MarketID}).set({
        //   TotalAmount : TotalAmount + combinenvs_create.TotalAmount
        // }).fetch();
        // console.log(combinenvs_result);
        combinenvs_list.push(combinenvs_create);
      }
      return res.send(req.body);
    } catch (err) {
      console.log("error in add", err);
    }
  }
};

