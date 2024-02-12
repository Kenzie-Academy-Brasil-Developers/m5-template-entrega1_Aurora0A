export class AppError extends Error{
    statusCode: number;

    constructor(statusCode: number, messange: string){
        super(messange);
        this.statusCode = statusCode;
    }
}