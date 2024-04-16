import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userservice : UserService, private jwtService: JwtService){}

    // async validateUser(username: string, password: string): Promise<any>{
    //     const user = await this.userservice.findUsername(username);

    //     if(user && user.password === password){
    //         const {password, username, ...rest} = user;
    //         return rest;
    //     }

    //     return null;
    // }

    async login(user: any){
        const data = await this.userservice.findUsername(user.username);

        if(data?.password !== user.password){
            throw new UnauthorizedException();
        }
        const payload = {name: data.username, sub: data.id};
        return {
            access_token: this.jwtService.sign(payload),
          };
        //return this.jwtService.signAsync(payload);
    }

}
