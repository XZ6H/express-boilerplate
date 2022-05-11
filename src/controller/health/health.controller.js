const { successResponse, errorResponse } = require('../../helpers/response');

const healthCheck = async (req, res) => {
  try {
    const data = "working";
    return successResponse(req, res, { data });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

module.exports = { healthCheck };
