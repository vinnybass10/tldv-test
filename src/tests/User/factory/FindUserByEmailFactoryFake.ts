import FindUserByEmailUseCase from '@domain/User/useCases/FindUserByEmailUseCase';
import FakeUserRepository from '@providers/database/typeorm/repositories/User/fake/FakeUserRepository';

export default class FindUserByEmailFactoryFake extends FindUserByEmailUseCase {
  constructor() {
    super(new FakeUserRepository());
  }
}
