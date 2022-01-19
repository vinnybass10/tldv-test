import IUseCase from '@core/IUseCase';

import IUserData from '../data/IUserData';
import UserEntity from '../entity/UserEntity';

export default abstract class FindUserByEmailUseCase
  implements IUseCase<string, UserEntity | undefined>
{
  constructor(private readonly userProvider: IUserData) {}

  public async execute(email: string): Promise<UserEntity | undefined> {
    return this.userProvider.findByEmail(email);
  }
}
