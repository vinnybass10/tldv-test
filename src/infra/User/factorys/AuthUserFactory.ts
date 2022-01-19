import AuthUserUseCase from '@domain/User/useCases/AuthUserUseCase';
import UserRepository from '@providers/database/typeorm/repositories/User/UserRepository';

export default class AuthUserFactory extends AuthUserUseCase {
  constructor() {
    super(new UserRepository());
  }
}
