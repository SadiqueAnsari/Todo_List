var jwt = require('jsonwebtoken');
const secret = "1234";
const isAuthorize = async (req, res, next) => {
    try {
      let token = req.headers["authorization"];
  
      if (!token) {
        return res.status(401).json({
          message: "Token is not supplied",
        });
      }
  
      if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
      }
  
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Invalid token",
          });
        }
  
        req.user = decoded.data;
        next();
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  module.exports ={isAuthorize}