import UserEntity from '../entity/UserEntity';

export type AuthUserDTO = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  token: string;
};
export default interface IUserData {
  findByEmail(email: string): Promise<UserEntity | undefined>;
  findUser({ email, password }: AuthUserDTO): Promise<UserEntity | undefined>;
}
