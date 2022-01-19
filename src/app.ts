import ApplicationError from '@infra/shared/middlewares/AplicationError';
import routes from '@infra/shared/routes';
import { json } from 'body-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import '@providers/database/typeorm/connection';

const app = express();

app.use(json());
app.use(cors());
app.use(routes);
app.use(errors());
app.use(ApplicationError);

export default app;
