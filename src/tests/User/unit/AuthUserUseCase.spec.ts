import AuthUserFactoryFake from '../factory/AuthUserFactoryFake';

let authUserUseCase: AuthUserFactoryFake;

describe('Find user by email and password - unit test', () => {
  beforeEach(() => {
    authUserUseCase = new AuthUserFactoryFake();
  });

  it('Should find an existent user', async () => {
    const user = {
      email: 'teste@teste.com',
      password: '123456',
    };
    const response = await authUserUseCase.execute(user);
    expect(response.token).toBeDefined();
  });

  it('Should not find an invalid user', async () => {
    const user = {
      email: 'teste@teste.com',
      password: 'aaaaa',
    };
    const result = await authUserUseCase.execute(user);
    expect(result).toStrictEqual({});
  });
});
