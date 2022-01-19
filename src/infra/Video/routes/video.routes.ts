import {
  ensureAuthenticated,
  authRequestValidation,
} from '@infra/shared/middlewares/Authentication';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import CreateVideoController from '../controllers/CreateVideoController';
import DeleteVideoController from '../controllers/DeleteVideoController';
import GetVideoByIdController from '../controllers/GetVideoByIdController';
import GetVideoController from '../controllers/GetVideoController';
import UpdateVideoController from '../controllers/UpdateVideoController';

const videoRouter = Router();
const createVideoController = new CreateVideoController();
const getVideoController = new GetVideoController();
const getVideoByIdController = new GetVideoByIdController();
const deleteVideoController = new DeleteVideoController();
const updateVideoController = new UpdateVideoController();

videoRouter.post(
  '/',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object().required().keys({
      name: Joi.string().required(),
      url: Joi.string().uri().required(),
      thumbnailUrl: Joi.string().uri().required(),
      isPrivate: Joi.boolean().required(),
    }),
  }),
  createVideoController.handle,
);

videoRouter.get(
  '/',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      limit: Joi.number().greater(0).required(),
      offset: Joi.number().required(),
      name: Joi.string(),
      url: Joi.string().uri(),
      thumbnailUrl: Joi.string().uri(),
      isPrivate: Joi.boolean(),
      timesViewed: Joi.number(),
      moreViewsThen: Joi.number().when('timesViewed', {
        is: Joi.exist(),
        then: Joi.forbidden(),
      }),
    },
  }),
  getVideoController.handle,
);

videoRouter.get(
  '/:id',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  getVideoByIdController.handle,
);

videoRouter.delete(
  '/:id',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  deleteVideoController.handle,
);

videoRouter.put(
  '/:id',
  authRequestValidation,
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: Joi.object().required().keys({
      name: Joi.string(),
      url: Joi.string().uri(),
      thumbnailUrl: Joi.string().uri(),
      isPrivate: Joi.boolean(),
      timesViewed: Joi.number(),
    }),
  }),
  updateVideoController.handle,
);

export default videoRouter;
