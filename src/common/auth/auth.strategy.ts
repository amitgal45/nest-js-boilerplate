import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (!req || !req.cookies) return null;
        return req.cookies['access_token'];
      },
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(data: any): Promise<any> {
    try{
      if(data.id)
        return data;
      
      throw new Error('Error')
    }
    catch(err){
      throw new HttpException(err.message,401)
    }
      // return false;
  }
}