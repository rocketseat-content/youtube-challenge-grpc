const HidraService = require('../services/hidra');

const { promisify } = require('util');

module.exports = async (req, res, next) => {
  try {
    const response = await HidraService.authenticate({
      token: req.headers.authorization,
    });

    if (response.error) throw new Error(response.error);

    req.userId = response.user.id;

    next();
  } catch ({ message }) {
    return res.status(401).json({ error: message });
  }
};
