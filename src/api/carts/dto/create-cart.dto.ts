import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";

export class CreateCartDto {
    @IsEnum(['closed', 'open'])
    @ApiProperty()
    status: 'closed'|'open'

    @ApiProperty()
    user_id: number;
}
