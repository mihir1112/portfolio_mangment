/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 const jwt = require('jsonwebtoken');

module.exports = {
  login : async function(req,res){
    try{
      let email = req.body.Email;
    let password = req.body.Password;
    if(email === '' && Number(password) == ''){
      const token = jwt.sign({ email, password}, sails.config.secret, { expiresIn: '1d' });

      req.session.userId = token;
      // res.cookie("token",token,{
      //   maxAge:600000,
      //   httpOnly:true
      // });
     return res.redirect('/dashboard');
    }else{
      return res.redirect('/');
    }
    }catch(err){
      console.log(' err in login',err);
    }

  //   res.view('Admin/newClients', {
  //     layout: '/layouts/adminLayout',
  //     user: user,
  // });
  },

  logout : async function(req,res){
    try{
      req.session.userId ='';
       return res.redirect('/');

    }catch (err){
      console.log(' err in logout',err);
    }
  }
};

