export default interface IUseCase<DTO, Response> {
  execute(requestDTO?: DTO, entityId?: number | string): Promise<Response>;
}
