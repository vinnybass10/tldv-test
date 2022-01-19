import { Request, Response } from 'express';

import GetVideoFactory from '../factorys/GetVideoFactory';

export default class GetVideoController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getVideoFactory = new GetVideoFactory();

    try {
      const filters = request.query;

      const videos = await getVideoFactory.execute(filters);

      return response.json({
        data: videos,
      });
    } catch (err) {
      console.log(err);
      return response.status(500).json({
        error: "Can't get any videos now, try again later",
      });
    }
  }
}
