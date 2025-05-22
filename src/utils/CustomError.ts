class CustomError extends Error {
  statusCode: number;
  description: string;

  constructor(message: string, statusCode: number, description: string) {
    super(message);
    this.statusCode = statusCode;
    this.description = description;
  }
}

export default CustomError;
