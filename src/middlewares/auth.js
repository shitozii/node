const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = {
  verifyStaff: (req, res, next) => {
    const Authorization = req.header("authorization");
    if (!Authorization) {
      const err = new Error("Unauthorized");
      err.statusCode = 400;
      return next(err);
    }
    const token = Authorization.replace("Bearer ", "");
    const user = jwt.verify(token, config.jwt.secret);
    if (!user) {
      const err = new Error("Token is not valid");
      err.statusCode = 403;
      return next(err);
    }
    req.user = user;
    if (!req.user.role) {
      const err = new Error("Forbidden");
      err.statusCode = 404;
      return next(err);
    }
    if (req.user.role === "staff") next();
    else {
      const err = new Error("Forbidden");
      err.statusCode = 404;
      return next(err);
    }
  },

  verifyAdmin: (req, res, next) => {
    const Authorization = req.header("authorization");
    if (!Authorization) {
      const err = new Error("Unauthorized");
      err.statusCode = 400;
      return next(err);
    }
    const token = Authorization.replace("Bearer ", "");
    const user = jwt.verify(token, config.jwt.secret);

    if (!user) {
      const err = new Error("Token is not valid");
      err.statusCode = 403;
      return next(err);
    }
    req.user = user;
    if (!req.user.role) {
      const err = new Error("Forbidden");
      err.statusCode = 404;
      return next(err);
    }
    if (req.user.role === "admin") next();
    else {
      const err = new Error("Forbidden");
      err.statusCode = 404;
      return next(err);
    }
  },
};
module.exports = auth;
