import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/api/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/api/user/user.service';

@Module({
    imports:[UserModule,PassportModule, JwtModule.register({
        secret: 'secret',
        signOptions: { expiresIn: '600s'}
    })],
    providers: [AuthService],
    exports:[AuthService]
})
export class AuthModule {}
