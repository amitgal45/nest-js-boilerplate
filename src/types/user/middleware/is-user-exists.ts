import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from '../user.model';
import { UserService } from '../user.service';
// import { UserService } from '../user.service';

@Injectable()

/**
 *
 */

export class isUserExistsMiddleware implements NestMiddleware {
    private readonly logger = new Logger(isUserExistsMiddleware.name);

    constructor() {

    }
    private userService = new UserService(User)
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const user: User = await this.userService.findOne(Number(req.params.id));
            if (user == null)
                throw new Error(`לא קיים משתמש עם המס"ד ${req.params.id}`)

            next()
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.CONFLICT)
        }
    }
}
