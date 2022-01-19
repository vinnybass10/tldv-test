import FindUserByEmailUseCase from '@domain/User/useCases/FindUserByEmailUseCase';
import UserRepository from '@providers/database/typeorm/repositories/User/UserRepository';

export default class FindUserByEmailFactory extends FindUserByEmailUseCase {
  constructor() {
    super(new UserRepository());
  }
}
