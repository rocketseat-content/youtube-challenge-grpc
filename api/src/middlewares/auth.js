const HidraService = require('../services/hidra');

module.exports = async (req, res, next) => {
  try {
    const response = await new Promise((resolve, reject) => {
      HidraService.authenticate(
        { token: req.headers.authorization },
        (err, response) => {
          if (err || response.error) {
            reject(err || response);
          } else {
            resolve(response);
          }
        }
      );
    });

    console.log(response);

    req.userId = response.user.id;

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).send(err);
  }
};
