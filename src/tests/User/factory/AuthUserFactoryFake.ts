import AuthUserUseCase from '@domain/User/useCases/AuthUserUseCase';
import FakeUserRepository from '@providers/database/typeorm/repositories/User/fake/FakeUserRepository';

export default class AuthUserFactoryFake extends AuthUserUseCase {
  constructor() {
    super(new FakeUserRepository());
  }
}
