const HidraService = require('../services/hidra');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      HidraService.loginUser({ user: { email, password } }, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    return res.json(response);
  }
}

module.exports = new SessionController();
