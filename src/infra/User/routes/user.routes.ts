import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import AuthUserController from '../controllers/AuthUserController';

const userRouter = Router();
const authUserController = new AuthUserController();

userRouter.post(
  '/auth',
  celebrate({
    [Segments.BODY]: Joi.object().required().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  authUserController.handle,
);

export default userRouter;
