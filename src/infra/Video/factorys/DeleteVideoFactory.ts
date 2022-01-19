import DeleteVideoUseCase from '@domain/Video/useCases/DeleteVideoUseCase';
import VideoRepository from '@providers/database/typeorm/repositories/Video/VideoRepository';

export default class DeleteVideoFactory extends DeleteVideoUseCase {
  constructor() {
    super(new VideoRepository());
  }
}
