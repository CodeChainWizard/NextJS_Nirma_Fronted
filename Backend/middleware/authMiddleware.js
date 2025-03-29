const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  const MAC = req.header("deviceMac");
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });
  if (!MAC)
    return res.status(401).json({ message: "Authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    let userData = globle.USER_DATA.map((data) => {
          return (data.id == decoded.id && data.mac == MAC)
        })
  
    if(userData.length == 0) {
      if(globle.USER_DATA.map((data) => { return (data.id == decoded.id) })) {
        globle.USER_DATA.delete({id: decoded.id});
      }
      return res.status(401).json({ message: "Someone try to access your account!" });
    }
    
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
