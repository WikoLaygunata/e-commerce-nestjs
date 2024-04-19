import { PartialType } from '@nestjs/swagger';
import { CreateCartdetailDto } from './create-cartdetail.dto';

export class UpdateCartdetailDto extends PartialType(CreateCartdetailDto) {}
