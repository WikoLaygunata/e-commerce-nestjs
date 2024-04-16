import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth/auth.service';
import { Public } from './ispublic.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}


  @Public()
  @Post('login')
  login(@Body() loginDto): Record<string, any>{
    return this.authService.login(loginDto);
  }
 
  @Get('protected')
  gethello(@Request() req){
    return 'kkk';
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getme(){
    return 
  }


  @Get()
  async getHello(): Promise<any> {
    return;
    //return await this.appService.getHello();
  }
}
