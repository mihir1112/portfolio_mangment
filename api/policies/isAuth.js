const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  try {
    const token =   req.session.userId;
        if(!token){
           return res.redirect('/');
        }
        const verifyuser = jwt.verify(token,sails.config.secret);
        if(verifyuser){
            next();
        }else{
            return res.redirect('/');
        }

    // let auth_header = req.headers.authorization;
    // if (auth_header) {
    //   let auth_token = auth_header.split(" ");
    //   let token = auth_token[1];
    //   if (!token) {
    //     token = req.body.token || req.headers.token || req.query.token || req.headers['x-access-token'];
    //   }
    //   jwt.verify(token, sails.config.secret, function (err, data) {
    //     if (err) {
    //       return res.status(401).json({
    //         status: 401,
    //         msg: "Unauthorized access."
    //       });
    //     }
    //     req.user_id = data.user_id;
    //     req.email = data.email;
    //     req.restaurant_id = data.restaurant_id;
    //     // if(user.email == req.body.user){
    //     next();
    //     // }

    //   });
    // } else {
    //   return res.status(401).send({
    //     status: 401,
    //     msg: "No token provided."
    //   });
    // }
  } catch (err) {
    console.log('error  in TockenChecker', err)
  }




}
