import IUseCase from '@core/IUseCase';
import { scryptSync } from 'crypto';
import { sign } from 'jsonwebtoken';

import IUserData, { AuthUserDTO, AuthUserResponse } from '../data/IUserData';

export default abstract class AuthUserUseCase implements IUseCase<AuthUserDTO, AuthUserResponse> {
  constructor(private readonly userProvider: IUserData) {}

  public async execute({ email, password }: AuthUserDTO): Promise<AuthUserResponse> {
    const passHash = scryptSync(password, 'test-salt', 32).toString('hex');

    const user = await this.userProvider.findUser({ email, password: passHash });

    if (user) {
      const token = sign({}, 'test-hash', {
        subject: user.email,
        expiresIn: '1d',
      });

      return { token };
    }

    return {} as AuthUserResponse;
  }
}
