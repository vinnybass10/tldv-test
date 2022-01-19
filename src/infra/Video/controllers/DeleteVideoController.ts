import { Request, Response } from 'express';

import DeleteVideoFactory from '../factorys/DeleteVideoFactory';

export default class DeleteVideoController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const deleteVideoFactory = new DeleteVideoFactory();

    const { id } = request.params;

    try {
      const deleted = await deleteVideoFactory.execute(Number(id));

      if (deleted) return response.status(204).json({ message: 'The video was deleted ' });

      return response
        .status(400)
        .json({ message: 'The video was not deleted, verify the id passed as parameter' });
    } catch (err) {
      return response.status(500).json({ error: "Can't delete the video, try again later" });
    }
  }
}
