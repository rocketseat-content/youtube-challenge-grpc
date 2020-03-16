import { Request, Response } from 'express';
import PurchaseService from '../services/nix';

class PurchaseController {
  async index(req: Request, res: Response) {
    const response = await PurchaseService.listPurchases({
      userId: req.userId,
    });

    return res.json(response);
  }

  async show(req: Request, res: Response) {
    const id: string = req.params.id;

    const response = await PurchaseService.getPurchaseById({ id });

    return res.json(response);
  }

  async store(req: Request, res: Response) {
    const { title, value } = req.body;

    const response = await PurchaseService.handlePurchase({
      purchase: { title, value, userId: req.userId },
    });

    return res.json(response);
  }
}

export default new PurchaseController();
