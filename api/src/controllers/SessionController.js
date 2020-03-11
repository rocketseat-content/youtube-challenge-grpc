const HidraService = require('../services/hidra');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const response = await HidraService.loginUser({
      user: { email, password },
    });

    return res.json(response);
  }
}

module.exports = new SessionController();
