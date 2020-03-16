import { Request, Response } from 'express';
import HidraService from '../services/hidra';

interface IShowBody {
  email: string;
  password: string;
}

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body as IShowBody;

    const response = await HidraService.loginUser({
      user: { email, password },
    });

    return res.json(response);
  }
}

export default new SessionController();
