const NixService = require('../services/nix');

class PurchaseController {
  async index(req, res) {
    const response = await NixService.listPurchases({ userId: req.userId });

    return res.json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await NixService.getPurchaseById({ id });

    return res.json(response);
  }

  async store(req, res) {
    const { title, value } = req.body;

    const response = await NixService.purchase({
      purchase: { title, value, userId: req.userId },
    });

    return res.json(response);
  }
}

module.exports = new PurchaseController();
