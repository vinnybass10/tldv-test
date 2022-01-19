import { AuthUserDTO } from '@domain/User/data/IUserData';
import { Request, Response } from 'express';

import AuthUserFactory from '../factorys/AuthUserFactory';

export default class AuthUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: AuthUserDTO = request.body;
    const authUserFactory = new AuthUserFactory();
    try {
      const userToken = await authUserFactory.execute({ email, password });

      if (userToken.token) {
        return response.json({
          token: userToken.token,
        });
      }

      return response.status(401).json({ message: 'Email or password are incorrect' });
    } catch (err) {
      return response
        .status(500)
        .json({ message: 'Unable to authenticate user, please try again' });
    }
  }
}
