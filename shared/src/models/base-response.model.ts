export class BaseResponse<T> {
  data: T;
  message: string;

  constructor(data: T, msg: string) {
    this.data = data;
    this.message = msg;
  }
}
