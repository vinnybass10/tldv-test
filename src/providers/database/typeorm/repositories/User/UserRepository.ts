import IUserData, { AuthUserDTO } from '@domain/User/data/IUserData';
import UserEntity from '@domain/User/entity/UserEntity';
import { getRepository, Repository } from 'typeorm';

import UserModel from '../../models/User/UserModel';

export default class UserRepository implements IUserData {
  private repository: Repository<UserModel>;

  constructor() {
    this.repository = getRepository(UserModel);
  }

  public async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.repository.findOne({ email });
  }

  public async findUser({ email, password }: AuthUserDTO): Promise<UserEntity | undefined> {
    return this.repository.findOne({ email, password });
  }
}
