import { IsEnum } from "class-validator";

export class CreateCartDto {
    @IsEnum(['closed', 'open'])
    status: 'closed'|'open'

    user_id: number;
}
