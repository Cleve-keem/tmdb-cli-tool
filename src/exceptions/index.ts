export default class InvalidTypeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalideTypeError";
  }
}
