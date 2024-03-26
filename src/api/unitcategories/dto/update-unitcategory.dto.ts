import { PartialType } from '@nestjs/mapped-types';
import { CreateUnitcategoryDto } from './create-unitcategory.dto';

export class UpdateUnitcategoryDto extends PartialType(CreateUnitcategoryDto) {}
