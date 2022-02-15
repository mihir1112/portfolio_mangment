/**
 * ClientController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  // client: async function (req, res) {
  //   console.log('djjsndjsndjk')
  //   return res.send('hbchdbc');
  //   // try {
  //   //   console.log('this function is called from nfjes');
  //   //   if (req.body) {
  //   //     let user = {
  //   //       Name: req.body.name,
  //   //       Email: req.body.email,
  //   //       Phone: req.body.phone
  //   //     }
  //   //     console.log('create new user function is called');
  //   //     let new_user = await Client.create(user);
  //   //     return res.redirect('/dashboard');
  //   //   }
  //   // } catch (err) {
  //   //   console.log('error in client ', err);
  //   // } 
  // },

  addclient : async function( req ,res){
   try {
      console.log('this function is called from nfjes');
      if (req.body) {
        let user = {
          Name: req.body.name,
          Email: req.body.email,
          Phone: req.body.phone
        }
        console.log('create new user function is called');
        let new_user = await Client.create(user);
        return res.redirect('/dashboard');
      }
    } catch (err) {
      console.log('error in client ', err);
    } 
  },
  clientList: async function (req, res) {
    try {
      let clients = await Client.find();
      return res.send(clients)
    } catch (err) {
      console.log('err in clientlist', err);
    }
  },
  clientDetail: async function (req, res) {
    try {
      console.log(req.params.id);
      let client = await Client.findOne({ id: req.params.id });
      let client_detail = {
        client: client
      }
      if (client) {
        let sql1 = `select *  from investmentbreakup as invbr INNER JOIN (select DISTINCT MarketID ,max(id) as id from investmentbreakup where ClientId = ${req.params.id} group by MarketID) as inv ON invbr.id = inv.id`;
        CombinedInvestment.query(sql1, [], async function (err, market_list) {
          console.log(market_list);
          for (let i = 0; i < market_list.length; i++) {
            let market_name = await Market.findOne({ id: market_list[i].MarketID });
            market_list[i].Market = market_name.Market;
          }
          client_detail.market_list = market_list;
          return res.send(client_detail);
        });
        let market_list = await InvestmentBreakup.find({ where: { ClientID: req.params.id }, select: ['MarketID'] });
      }

    } catch (err) {
      console.log('err in clientDetail', err);
    }
  },

  clientinv: async function (req, res) {
    try {
      console.log(req.params.id);
      let clientinv = await Investment.find({ where: { ClientID: req.params.id } });

      for (let i = 0; i < clientinv.length; i++) {
        console.log(clientinv[i]);
        if (clientinv[i].Date != null) {
          let date =clientinv[i].Date;
          const formatYmd = date => date.toISOString().slice(0, 10);
           let rever_date =formatYmd(date);
           let final_date = rever_date.split("-").reverse().join("-");
           clientinv[i].Date = final_date;
        }
        if (clientinv[i].AW == 'A') {
          clientinv[i].AW = 'add'
        }
        if (clientinv[i].AW == 'W') {
          clientinv[i].AW = 'Withdraw'
        }
      }
      return res.send(clientinv);
    } catch (err) {
      console.log('err in clientDetail', err);
    }
  }

};

