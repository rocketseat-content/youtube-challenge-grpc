import { Request, Response } from 'express';
import HidraService from '../services/hidra';

interface IStoreBody {
  email: string;
  username: string;
  password: string;
}

class UserController {
  async show(req: Request, res: Response) {
    const id: string = req.params.id;

    const response = await HidraService.getUserById({ id });

    return res.json(response);
  }

  async store(req: Request, res: Response) {
    const { email, username, password } = req.body as IStoreBody;

    const response = await HidraService.registerUser({
      user: { email, username, password },
    });

    return res.json(response);
  }
}

export default new UserController();
