import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth/auth.service';
import { AuthGuard } from './auth/auth/auth.guard';
import { Public } from './ispublic.decorator';

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


  @Get()
  async getHello(): Promise<any> {
    return;
    //return await this.appService.getHello();
  }
}
