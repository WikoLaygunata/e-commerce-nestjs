import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsNumberString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @MinLength(4)
    username: string;
    @ApiProperty()
    @MinLength(3)
    name: string;
    @ApiProperty()
    @MinLength(8)
    password: string;
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsNumberString()
    phone: string;

    @ApiProperty()
    address?: string;

    @ApiProperty()
    @IsEnum(['user', 'admin'], {message: 'Only user or admin'})
    role: string;
}
