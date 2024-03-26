import { IsEmail, IsEnum, IsNumber, IsNumberString, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(4)
    username: string;
    @MinLength(4)
    name: string;
    @MinLength(8)
    password: string;
    @IsEmail()
    email: string;
    @IsNumberString()
    phone: string;

    address?: string;

    @IsEnum(['user', 'admin'], {message: 'Only user or admin'})
    role: string;
}
