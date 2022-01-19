import VideoEntity from '../entity/VideoEntity';

export type CreateVideoDTO = {
  name: string;
  url: string;
  thumbnailUrl: string;
  isPrivate: boolean;
};

export type CreateVideoData = {
  name: string;
  url: string;
  thumbnailUrl: string;
  isPrivate: boolean;
  timesViewed: number;
};

export type UpdateVideoDTO = {
  name?: string;
  url?: string;
  thumbnailUrl?: string;
  isPrivate?: boolean;
  timesViewed?: number;
};

export type VideoFiltersDTO = {
  name?: string;
  url?: string;
  thumbnailUrl?: string;
  isPrivate?: boolean;
  timesViewed?: number;
  moreViewsThen?: number;
  offset: number;
  limit: number;
};

export default interface IVideoData {
  createVideo(data: CreateVideoData): Promise<VideoEntity>;
  deleteVideo(videoId: number): Promise<boolean>;
  updateVideo(videoId: number, data: UpdateVideoDTO): Promise<boolean>;
  getVideo(filters: VideoFiltersDTO): Promise<VideoEntity[] | undefined>;
  getVideoById(videoId: number): Promise<VideoEntity | undefined>;
}
