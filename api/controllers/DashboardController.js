/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  dashboard: async function (req, res) {
    try {
      let market = await Market.find({ select: ['market'], where: { Active: 1 } });
      return res.view('Dashboard/index', {
        market: market
      })
    } catch (err) {
      console.log("error in dashboard", err);
    }
    // return res.view('Dashboard/index')
    //   res.view('Admin/newClients', {
    //     layout: '/layouts/adminLayout',
    //     user: user,
    // });
  }
};

