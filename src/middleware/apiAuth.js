const { errorResponse } = require('../helpers/response');

const apiAuth = async (req, res, next) => {
  // if (!(req.headers && req.headers['x-token'])) {
  //   return errorResponse(req, res, 'Token is not provided', 401);
  // }
  const token = req.headers['x-token'];
  try {
    // verify JWT
    return next();
  } catch (error) {
    return errorResponse(
      req,
      res,
      'Incorrect token is provided, try re-login',
      401,
    );
  }
};

module.exports = apiAuth;
