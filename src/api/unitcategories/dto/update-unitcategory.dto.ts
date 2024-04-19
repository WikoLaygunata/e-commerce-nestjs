import { PartialType } from '@nestjs/swagger';
import { CreateUnitcategoryDto } from './create-unitcategory.dto';

export class UpdateUnitcategoryDto extends PartialType(CreateUnitcategoryDto) {}
