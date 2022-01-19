import AppError from '@core/AppError';
import FindUserByEmailFactory from '@infra/User/factorys/FindUserByEmailFactory';
import { celebrate, Segments, Joi } from 'celebrate';
import { Request, Response, NextFunction, response } from 'express';
import { JsonWebTokenError, verify } from 'jsonwebtoken';

type IPayload = {
  sub: string;
};

export const authRequestValidation = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Bearer Token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userEmail } = verify(token, 'test-hash') as IPayload;

    const findUserByEmailUseCase = new FindUserByEmailFactory();

    const user = await findUserByEmailUseCase.execute(userEmail);

    if (!user) return response.status(401).json({ message: 'User do not exists' });

    return next();
  } catch (err) {
    let error = 'Unable to validate auth token';
    if (err instanceof JsonWebTokenError) {
      error = err.message;
    }
    return response.status(500).json({ error });
  }
}
