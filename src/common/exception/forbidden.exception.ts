import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    constructor() {
        super("Forbidden", HttpStatus.FORBIDDEN);
    }
}

export class MisdirectedException extends HttpException {
    constructor() {
        super("Misdirected", HttpStatus.MISDIRECTED);
    }
}
