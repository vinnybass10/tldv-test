import { Request, Response } from 'express';

import GetVideoByIdFactory from '../factorys/GetVideoByIdFactory';

export default class GetVideoByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getVideoByIdFactory = new GetVideoByIdFactory();

    const { id } = request.params;

    const video = await getVideoByIdFactory.execute(parseInt(id, 10));

    return response.json(video);
  }
}
