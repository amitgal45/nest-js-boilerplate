import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from '../user.model';
import { UserService } from '../user.service';
// import { UserService } from '../user.service';

@Injectable()

/**
 *
 */

export class isEmailValidMiddleware implements NestMiddleware {
    private readonly logger = new Logger(isEmailValidMiddleware.name);

    constructor() {

    }
    private userService = new UserService(User)
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const user: User = await this.userService.findByKeyValue("email",req.body.email);
            if (user != null)
                throw new Error("Email isnt avaliable")

            next()
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.CONFLICT)
        }
    }
}
