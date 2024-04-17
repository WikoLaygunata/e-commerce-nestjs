import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/api/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[UserModule,PassportModule, JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '600s'},
    })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],})
export class AuthModule {}
