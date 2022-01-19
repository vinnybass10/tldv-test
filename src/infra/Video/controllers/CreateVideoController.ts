import { CreateVideoDTO } from '@domain/Video/data/IVideoData';
import { Request, Response } from 'express';

import CreateVideoFactory from '../factorys/CreateVideoFactory';

export default class CreateVideoController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createVideoFactory = new CreateVideoFactory();

    try {
      const data: CreateVideoDTO = request.body;

      const video = await createVideoFactory.execute(data);

      return response.status(201).json({ data: video });
    } catch (err) {
      return response.status(500).json({
        error: "Can't create a video, try again later",
      });
    }
  }
}
