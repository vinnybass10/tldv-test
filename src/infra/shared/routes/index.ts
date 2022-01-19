import userRouter from '@infra/User/routes/user.routes';
import VideoRouter from '@infra/Video/routes/video.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/videos', VideoRouter);
routes.use('/user', userRouter);

export default routes;
