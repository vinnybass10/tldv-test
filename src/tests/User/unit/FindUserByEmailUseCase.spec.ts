import FindUserByEmailFactoryFake from '../factory/FindUserByEmailFactoryFake';

let findUserByEmailUseCase: FindUserByEmailFactoryFake;

describe('Find user by email - unit test', () => {
  beforeEach(() => {
    findUserByEmailUseCase = new FindUserByEmailFactoryFake();
  });

  it('Should find an existent user', async () => {
    const user = await findUserByEmailUseCase.execute('teste@teste.com');
    expect(user?.id).toBe(1);
  });
});
