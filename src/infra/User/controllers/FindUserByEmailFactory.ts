import { AuthUserDTO } from '@domain/User/data/IUserData';
import { Request, Response } from 'express';

import AuthUserFactory from '../factorys/AuthUserFactory';

export default class AuthUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: AuthUserDTO = request.body;
    const authUserFactory = new AuthUserFactory();
    const userToken = await authUserFactory.execute({ email, password });
    return response.json({
      token: userToken.token,
    });
  }
}
