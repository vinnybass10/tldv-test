import IUserData, { AuthUserDTO } from '@domain/User/data/IUserData';
import UserEntity from '@domain/User/entity/UserEntity';

export default class FakeUserRepository implements IUserData {
  private users: UserEntity[] = [
    {
      id: 1,
      email: 'teste@teste.com',
      password: 'a01622d89edffc5d9d25cdee0619349738acb3cba28f069760eb12ba38ea0a4f',
    },
  ];

  public async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.email === email);
  }

  public async findUser({ email, password }: AuthUserDTO): Promise<UserEntity | undefined> {
    return this.users.find(user => user.email === email && user.password === password);
  }
}
