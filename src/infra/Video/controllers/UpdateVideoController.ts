import { Request, Response } from 'express';

import UpdateVideoFactory from '../factorys/UpdateVideoFactory';

export default class UpdateVideoController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updateVideoFactory = new UpdateVideoFactory();

    const { id } = request.params;
    const data = request.body;

    try {
      const updated = await updateVideoFactory.execute(data, Number(id));

      if (updated) return response.status(204).json({ message: 'The video was updated ' });

      return response
        .status(400)
        .json({ message: 'The video was not deleted, verify the id passed as parameter' });
    } catch (err) {
      return response.status(500).json({
        error: "Can't update the video rigth now, try again later",
      });
    }
  }
}
